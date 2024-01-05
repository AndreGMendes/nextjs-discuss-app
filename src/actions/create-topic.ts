"use server";

// Importing the 'ZOD' Validation Library
import { z } from "zod";

// Importing User 'AUTH' JS
import { auth } from "@/auth";

// Imports regarding the 'Prisma' DB
import type { Topic } from "@prisma/client";
import { db } from "@/db";

// Imports regarding paths
import { redirect } from "next/navigation";
import { appPaths } from "@/paths";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicformState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

async function createTopic(
  formState: CreateTopicformState,
  formData: FormData
): Promise<CreateTopicformState> {
  console.log(logUserInputValues(formData));

  await new Promise (resolve => setTimeout(resolve, 2500))

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    // A) EXAMPLE: VanillaJS method to get iterate over all errors
    logUserInputValidationErrors(result);

    // B) EXAMPLE: NextJS fast way
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["Please Sign in first."],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/");
  redirect(appPaths.topicShow(topic.slug));
}

// Utility Functions (Logging and Other stuff)
function logUserInputValues(formData: FormData): string {
  const message = `Submit Button (@'Create Topic') pressed. Values submitted: ${formData.get(
    "name"
  )}, ${formData.get("description")}`;

  return message;
}

function logUserInputValidationErrors(
  result: z.SafeParseError<{ name: string; description: string }>
): void {
  result.error.errors.map((error, index) => {
    console.log(
      "Error: ".toLocaleUpperCase() +
        [index] +
        " | " +
        "Input Field: ".toLocaleUpperCase() +
        error.path +
        " | " +
        "Message: ".toLocaleUpperCase() +
        error.message
    );
  });
}

// Just for Random Testing
function justForTesting() {}

export { createTopic, justForTesting as justForTestingXYZ };

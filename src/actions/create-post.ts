"use server";

// Importing the 'ZOD' Validation Library
import { z } from "zod";

// Importing User 'AUTH' JS
import { auth } from "@/auth";

// Imports regarding the 'Prisma' DB
import type { Post } from "@prisma/client";
import { db } from "@/db";

// Imports regarding paths
import { redirect } from "next/navigation";
import { appPaths } from "@/paths";
import { revalidatePath } from "next/cache";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostformState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export const createPost = async (
  slug: string,
  formState: CreatePostformState,
  formData: FormData
): Promise<CreatePostformState> => {
  //TODO: Revalidate the Topic Show Page

  console.log(logUserInputValues(formData));

  await new Promise((resolve) => setTimeout(resolve, 2500));

  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
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

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find Topic."],
      },
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
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
          _form: ["Failed to create Post."],
        },
      };
    }
  }
  revalidatePath(appPaths.topicShow(slug));
  redirect(appPaths.postShow(slug, post.id));

};

// Utility Functions (Logging and Other stuff)
function logUserInputValues(formData: FormData): string {
  const message = `Submit Button (@'Save Post') pressed. Values submitted: ${formData.get(
    "title"
  )}, ${formData.get("content")}`;

  return message;
}

function logUserInputValidationErrors(
  result: z.SafeParseError<{ title: string; content: string }>
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

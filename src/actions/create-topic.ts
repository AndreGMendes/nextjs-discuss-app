"use server";

// Importing the ZOD Validation Library
import { z } from "zod";

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
  };
}

async function createTopic(
  formState: CreateTopicformState,
  formData: FormData
): Promise<CreateTopicformState> {
  // TODO: Revalidate the HomePage

  console.log(logUserInputValues(formData));

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
  return {
    errors: {},
  };
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

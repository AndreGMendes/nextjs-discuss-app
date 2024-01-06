"use client";

// Components and Icons regarding 'Font Awesome'
import { faPenToSquare as faPenToSquare } from "@fortawesome/free-regular-svg-icons";

// Components regarding 'NextUI'
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

// Custom Client Components
import FormButton from "@/components/common/form-button";

// Imports regarding the Server Actions
import * as actions from "@/actions";

// Imports regarding React Hooks
import { useFormState } from "react-dom";
import CustomIcon from "../common/custom-icon";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="secondary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          action={action}
          style={{
            borderColor: "",
            borderStyle: "",
            borderWidth: "0px 0px",
          }}
        >
          <div className="flex flex-col gap-4 w-80 items-left m-4">
            <div className="flex gap-2">
              <div className="flex items-center">
                <CustomIcon
                  iconNameProp={faPenToSquare}
                  widthProp={20}
                  heightProp={30}
                  colorProp="#9370db"
                  customCSSAnimationTypeProp="bounceIconInfinite"
                />
              </div>
              <h3 className="text-lg" style={{ color: "#9370db" }}>
                Create Post
              </h3>
            </div>
            <Input
              label="Title"
              labelPlacement="inside"
              //   placeholder="Name your Topic"
              color="secondary"
              variant="flat"
              size="md"
              name="title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.map(
                (error, index, array) => (
                  <span key={index}>
                    <span className="font-extrabold">Error {index + 1}</span> -{" "}
                    {error}
                    {index !== array.length - 1 ? ", " : "."}
                    <br />
                  </span>
                )
              )}
            />

            <Textarea
              label="Content"
              labelPlacement="inside"
              //   placeholder="Describe your Post"
              color="secondary"
              variant="bordered"
              size="md"
              name="content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.map(
                (error, index, array) => (
                  <span key={index}>
                    <span className="font-extrabold">Error {index + 1}</span> -{" "}
                    {error}
                    {index !== array.length - 1 ? ", " : "."}
                    <br />
                  </span>
                )
              )}
            />

            {formState.errors._form ? (
              <div className="bg-red-200 border rounded-xl border-red-400 text-red-600 p-4 text-center">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <FormButton>Create post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

"use client";

// Components and Icons regarding 'Font Awesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
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
import { useEffect } from "react";

export const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="secondary">Create Topic</Button>
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
              <FontAwesomeIcon
                icon={faPenToSquare}
                bounce
                style={{ color: "#9370db" }}
                width={20}
                height={30}
                className=""
              />{" "}
              <h3 className="text-lg" style={{ color: "#9370db" }}>
                Create Topic
              </h3>
            </div>
            <Input
              label="Topic Name"
              labelPlacement="inside"
              //   placeholder="Name your Topic"
              color="secondary"
              variant="bordered"
              size="md"
              name="name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.map(
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
              label="Description"
              labelPlacement="inside"
              placeholder="Describe your Topic"
              color="secondary"
              variant="underlined"
              size="md"
              name="description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.map(
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
                {formState.errors._form?.join(", ")}{" "}
              </div>
            ) : null}

            {/* <Button type="submit" color="secondary">
              Submit
            </Button> */}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

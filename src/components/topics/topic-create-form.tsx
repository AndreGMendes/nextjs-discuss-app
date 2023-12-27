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

// Imports regarding the Server Actions
import { createTopic } from "@/actions";

export const TopicCreateForm = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="secondary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          action={createTopic}
          style={{
            borderColor: "",
            borderStyle: "",
            borderWidth: "0px 0px",
          }}
        >
          <div className="flex flex-col gap-4 w-80 items-left">
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
              label="Name"
              labelPlacement="inside"
              placeholder="Name your Topic"
              color="secondary"
              variant="underlined"
              size="md"
            />
            <Textarea
              label="Description"
              labelPlacement="inside"
              placeholder="Describe your Topic"
              color="secondary"
              variant="underlined"
              size="md"
            />
            <Button type="submit" color="secondary">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

// Components from the Playground
import { SumComponent, MultiplyComponent } from "@/playground/playground";
import { TopicCreateForm } from "@/components/topics/topic-create-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare as faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4  m-2">
      <div className="col-span-3 ">
        <h1 className="text-xl m-2 flex">
          <FontAwesomeIcon
            icon={faStarRegular}
            bounce
            style={{ color: "#ff7f50" }}
            width={20}
            height={30}
            className="mx-2"
          />{" "}
          Top Posts
        </h1>
      </div>
      <div className="text-md m-2 flex items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          bounce
          style={{ color: "#9370db" }}
          width={20}
          height={30}
          className="mx-2"
        />{" "}
        <TopicCreateForm />
      </div>
    </div>
  );
}

// User Server Components from the 'Playground' (Testing purposes)
import { SumComponent, MultiplyComponent } from "@/playground/playground";

// Components and Icons regarding 'Font Awesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare as faPenToSquare } from "@fortawesome/free-regular-svg-icons";

// User Server Components
import { TopicCreateForm } from "@/components/topics/topic-create-form";

import { db } from "@/db";
import TopicList from "@/components/topics/topic-list";

export default function Home() {
  return (
    <div
      className="grid grid-cols-4 gap-4 p-4  my-2 items-center"
      id="homePage"
    >
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
      <div
        style={{
          position: "relative",
          gridArea: "2/4",
          margin: "0px 16px",
          padding: "8px 0px 8px 0px",
        }}
      >
        <TopicList />
      </div>
    </div>
  );
}

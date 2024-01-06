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
import { Divider } from "@nextui-org/react";
import CustomIcon from "@/components/common/custom-icon";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-0 p-4 my-2 items-center" id="homePage">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold m-2 flex">
          <CustomIcon
            iconNameProp={faStarRegular}
            widthProp={20}
            heightProp={30}
            marginLeftProp={18}
            marginRightProp={12}
            colorProp="#ff7f50"
            customCSSAnimationTypeProp="bounceIcon"
          />
          Top Posts
        </h1>
      </div>

      <div className="text-md mx-2 flex items-center border-t border-l border-r pt-2">
        <CustomIcon
          iconNameProp={faPenToSquare}
          widthProp={16}
          marginLeftProp={18}
          marginRightProp={12}
          colorProp="#9370db"
          customCSSAnimationTypeProp="bounceIcon"
        />

        <TopicCreateForm />
      </div>
      <div
        className="border-x mx-2 p-2 border-b border-l border-r"
        style={{
          gridArea: "2/4",

          paddingLeft: "16px",
        }}
      >
        <div>
          <Divider className="" />
          <h3 className="text-lg py-2">Topics</h3>
        </div>

        <TopicList />
      </div>
    </div>
  );
}

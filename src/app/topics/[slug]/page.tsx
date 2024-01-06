import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import CustomIcon from "@/components/common/custom-icon";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-0 p-4 my-2 items-center" id="homePage">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold m-2 flex">
          {/* <FontAwesomeIcon
            icon={faBookmark}
            bounce
            style={{
              color: "#ff7f50",
              marginLeft: "10px",
              marginRight: "12px",
            }}
            width={14}
          /> */}
          <CustomIcon
            iconNameProp={faBookmark}
            widthProp={14}
            colorProp="#ff7f50"
            
          />
          {slug
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}
        </h1>
      </div>
    </div>
  );
};

export default TopicShowPage;

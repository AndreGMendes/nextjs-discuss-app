import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import { appPaths } from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany();
  console.log(topics);

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id} className="">
        <Link href={appPaths.topicShow(topic.slug)}>
          {/* <Chip color="warning" variant="shadow" content={topic.slug}/> */}
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2 justify-items-start">{renderedTopics}</div>;
}

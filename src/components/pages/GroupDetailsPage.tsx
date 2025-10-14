import Header from "../Header";
import Button from "../Button";
import TabView from "../TabView";
import type { Group } from "../../models/GroupModels";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGroupById } from "../../services/GroupService";
import SEO from "../SEO";

const GroupDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [group, setGroup] = useState<Group | null>(null);

  useEffect(() => {
    if (id) {
      const foundGroup = getGroupById(id);
      setGroup(foundGroup);
    }
  }, [id]);

  if (!group) return <p>Loading...</p>;

  const { name, description, budget } = group;

  return (
    <div className="w-5/6 mx-auto mt-3">
      {/* ADD SEO metadata */}
      <SEO title={`${name} | Expense Splitter `} description={description} />

      <div className="flex justify-between">
        <Header title={name} />
        <Button
          name="Go back"
          isPrimary={false}
          type="button"
          rounded={true}
          color="self-center bg-secondary text-primary-text hover:bg-gray-500 outline-1"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
      <div>
        <p className="font-semibold">{description}</p>
        <div className="flex gap-x-2 text-sm text-gray-400 my-1">
          <span>${budget} budget</span>
        </div>
      </div>
      <div className="mt-3">
        <TabView groupId={group.id} />
      </div>
    </div>
  );
};

export default GroupDetailsPage;

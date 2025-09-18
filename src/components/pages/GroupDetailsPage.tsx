import Header from "../Header";
import Button from "../Button";
import TabView from "../TabView";
import type { Group } from "../../models/GroupModels";

interface Props {
  group: Group;
}

const GroupDetailsPage = ({ group }: Props) => {
  const { name, description, budget, participantList } = group;

  return (
    <div className="w-5/6 mx-auto mt-3">
      <div className="flex justify-between">
        <Header title={name} />
        <Button name="settle  up" isPrimary={false} type="button" />
      </div>
      <div>
        <p className="font-semibold">{description}</p>
        <div className="flex gap-x-2 text-sm text-gray-400 my-1">
          <span>{participantList.length} people</span>
          <span>${budget} budget</span>
          <span>20 days</span>
        </div>
      </div>
      <div className="mt-3">
        <TabView groupId="g1" />
      </div>
    </div>
  );
};

export default GroupDetailsPage;

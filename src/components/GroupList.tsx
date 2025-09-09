import type { Group } from "../models/GroupModels";
import GroupCard from "./GroupCard";

interface Props {
  groups: Group[];
}

const GroupList = ({ groups }: Props) => {
  if (groups.length === 0) return <p>There are no groups</p>;

  return (
    <div>
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
};

export default GroupList;

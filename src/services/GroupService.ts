import type { Group } from "../models/GroupModels";
import { data } from "../data/data";

let groups: Group[] = data;

export function getGroups(): Group[] {
  return groups;
}

export function getGroup(groupId: string): Group | undefined {
  return groups.find((g) => g.id === groupId);
}

export function saveGroup(group: Group): Group {
  // save new group or update
  const index = groups.findIndex((g) => g.id === group.id);

  if (index === -1) {
    groups.push(group);
  } else {
    groups[index] = { ...groups[index], ...group };
  }

  return group;
}

export function deleteGroup(groupId: string): boolean {
  const prevLength = groups.length;
  groups = groups.filter((g) => g.id !== groupId);
  return groups.length < prevLength;
}

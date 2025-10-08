import type { Group } from "../models/GroupModels";
import { data } from "../data/data";

const groups: Group[] = data;

export function getGroups(): Group[] {
  return groups;
}

export function getGroupById(groupId: string): Group | null {
  const group = groups.find((g) => g.id === groupId);
  return group ? group : null;
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
  // const prevLength = groups.length;
  // groups = groups.filter((g) => g.id !== groupId);
  // return groups.length < prevLength;
  //  const group = groups.find((g) => g.id === groupId);
  // if (!group) return false;

  const index = groups.findIndex((g) => g.id === groupId);
  if (index === -1) return false;

  groups.splice(index, 1);
  // save to local storage;
  return true;
}

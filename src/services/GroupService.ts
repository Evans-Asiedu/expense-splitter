import type { Group } from "../models/GroupModels";
import { data as initialData } from "../data/data";
import { loadGroupsFromStorage, saveGroupsToStorage } from "../utils/Storage";

const groups: Group[] = loadGroupsFromStorage() || initialData;

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

  saveGroupsToStorage(groups);

  return group;
}

export function deleteGroup(groupId: string): boolean {
  const index = groups.findIndex((g) => g.id === groupId);
  if (index === -1) return false;

  groups.splice(index, 1);
  saveGroupsToStorage(groups);
  return true;
}

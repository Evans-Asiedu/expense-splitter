import type { Group } from "../models/GroupModels";
import { data as initialData } from "../data/data";

const STORAGE_KEY = "groupsData";

export function loadGroupsFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (error) {
    console.error("Error loading groups from localStorage:", error);
  }

  saveGroupsToStorage(initialData);
  return initialData;
}

export function saveGroupsToStorage(groups: Group[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
  } catch (error) {
    console.error("Error saving groups to localStorage:", error);
  }
}

import { data as groups } from "../data/data";
import type { Participant } from "./../models/GroupModels";

// READ
export function getParticipants(groupId: string): Participant[] {
  const group = groups.find((g) => g.id === groupId);
  return group ? [...group.participantList] : [];
}

export function getParticipant(
  groupId: string,
  participantId: string
): Participant | undefined {
  const group = groups.find((g) => g.id === groupId);
  return group?.participantList.find((p) => p.id === participantId);
}

// CREATE
export function addParticipant(
  groupId: string,
  participant: Participant
): Participant | null {
  const group = groups.find((g) => g.id === groupId);
  if (!group) return null;

  const newParticipant: Participant = { ...participant };
  group.participantList.push(newParticipant);
  return newParticipant;
}

// UPDATE
export function updateParticipant(
  groupId: string,
  participantId: string,
  updatedParticipant: Participant
): Participant | null {
  const group = groups.find((g) => g.id === groupId);
  if (!group) return null;

  const participant = group.participantList.find((p) => p.id === participantId);
  if (!participant) return null;

  Object.assign(participant, updatedParticipant);
  return participant;
}

// DELETE
export function deleteParticipant(
  groupId: string,
  participantId: string
): boolean {
  const group = groups.find((g) => g.id === groupId);
  if (!group) return false;

  const index = group.participantList.findIndex((p) => p.id === participantId);
  if (index === -1) return false;

  group.participantList.splice(index, 1);
  return true;
}

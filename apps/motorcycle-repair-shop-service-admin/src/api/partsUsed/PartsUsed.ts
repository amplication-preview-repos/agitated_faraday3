import { Repair } from "../repair/Repair";

export type PartsUsed = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  partName: string | null;
  partNumber: string | null;
  quantity: number | null;
  cost: number | null;
  repair?: Repair | null;
};

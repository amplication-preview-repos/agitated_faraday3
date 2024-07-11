import { Motorcycle } from "../motorcycle/Motorcycle";
import { Mechanic } from "../mechanic/Mechanic";
import { PartsUsed } from "../partsUsed/PartsUsed";

export type Repair = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  cost: number | null;
  description: string | null;
  motorcycle?: Motorcycle | null;
  mechanic?: Mechanic | null;
  partsUseds?: Array<PartsUsed>;
};

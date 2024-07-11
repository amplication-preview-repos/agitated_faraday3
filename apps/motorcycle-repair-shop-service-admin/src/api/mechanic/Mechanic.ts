import { Repair } from "../repair/Repair";

export type Mechanic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  phoneNumber: string | null;
  email: string | null;
  specialization: string | null;
  repairs?: Array<Repair>;
};

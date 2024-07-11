import { Motorcycle } from "../motorcycle/Motorcycle";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  address: string | null;
  motorcycle?: Motorcycle | null;
};

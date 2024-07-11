import { Repair } from "../repair/Repair";
import { Customer } from "../customer/Customer";

export type Motorcycle = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  model: string | null;
  year: number | null;
  make: string | null;
  repairs?: Array<Repair>;
  customers?: Array<Customer>;
  owner: string | null;
};

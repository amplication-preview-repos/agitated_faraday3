import { SortOrder } from "../../util/SortOrder";

export type MechanicOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
  specialization?: SortOrder;
};

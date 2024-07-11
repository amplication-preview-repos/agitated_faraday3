import { SortOrder } from "../../util/SortOrder";

export type RepairOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  cost?: SortOrder;
  description?: SortOrder;
  motorcycleId?: SortOrder;
  mechanicId?: SortOrder;
};

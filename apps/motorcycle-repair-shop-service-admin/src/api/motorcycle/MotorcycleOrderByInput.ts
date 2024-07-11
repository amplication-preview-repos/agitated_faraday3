import { SortOrder } from "../../util/SortOrder";

export type MotorcycleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  model?: SortOrder;
  year?: SortOrder;
  make?: SortOrder;
  owner?: SortOrder;
};

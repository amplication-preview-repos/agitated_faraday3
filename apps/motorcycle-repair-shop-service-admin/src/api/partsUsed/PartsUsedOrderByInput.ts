import { SortOrder } from "../../util/SortOrder";

export type PartsUsedOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  partName?: SortOrder;
  partNumber?: SortOrder;
  quantity?: SortOrder;
  cost?: SortOrder;
  repairId?: SortOrder;
};

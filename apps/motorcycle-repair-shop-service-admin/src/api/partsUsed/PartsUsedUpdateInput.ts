import { RepairWhereUniqueInput } from "../repair/RepairWhereUniqueInput";

export type PartsUsedUpdateInput = {
  partName?: string | null;
  partNumber?: string | null;
  quantity?: number | null;
  cost?: number | null;
  repair?: RepairWhereUniqueInput | null;
};

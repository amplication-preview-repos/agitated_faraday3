import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RepairWhereUniqueInput } from "../repair/RepairWhereUniqueInput";

export type PartsUsedWhereInput = {
  id?: StringFilter;
  partName?: StringNullableFilter;
  partNumber?: StringNullableFilter;
  quantity?: IntNullableFilter;
  cost?: FloatNullableFilter;
  repair?: RepairWhereUniqueInput;
};

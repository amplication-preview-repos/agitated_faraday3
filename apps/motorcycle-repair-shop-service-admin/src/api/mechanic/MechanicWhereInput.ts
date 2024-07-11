import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";

export type MechanicWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  specialization?: StringNullableFilter;
  repairs?: RepairListRelationFilter;
};

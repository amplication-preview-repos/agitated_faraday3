import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";

export type MotorcycleWhereInput = {
  id?: StringFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
  make?: StringNullableFilter;
  repairs?: RepairListRelationFilter;
  customers?: CustomerListRelationFilter;
  owner?: StringNullableFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MotorcycleWhereUniqueInput } from "../motorcycle/MotorcycleWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  motorcycle?: MotorcycleWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MotorcycleWhereUniqueInput } from "../motorcycle/MotorcycleWhereUniqueInput";
import { MechanicWhereUniqueInput } from "../mechanic/MechanicWhereUniqueInput";
import { PartsUsedListRelationFilter } from "../partsUsed/PartsUsedListRelationFilter";

export type RepairWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  motorcycle?: MotorcycleWhereUniqueInput;
  mechanic?: MechanicWhereUniqueInput;
  partsUseds?: PartsUsedListRelationFilter;
};

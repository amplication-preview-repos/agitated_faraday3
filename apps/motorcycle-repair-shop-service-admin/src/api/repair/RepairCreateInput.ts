import { MotorcycleWhereUniqueInput } from "../motorcycle/MotorcycleWhereUniqueInput";
import { MechanicWhereUniqueInput } from "../mechanic/MechanicWhereUniqueInput";
import { PartsUsedCreateNestedManyWithoutRepairsInput } from "./PartsUsedCreateNestedManyWithoutRepairsInput";

export type RepairCreateInput = {
  date?: Date | null;
  cost?: number | null;
  description?: string | null;
  motorcycle?: MotorcycleWhereUniqueInput | null;
  mechanic?: MechanicWhereUniqueInput | null;
  partsUseds?: PartsUsedCreateNestedManyWithoutRepairsInput;
};

import { MotorcycleWhereUniqueInput } from "../motorcycle/MotorcycleWhereUniqueInput";
import { MechanicWhereUniqueInput } from "../mechanic/MechanicWhereUniqueInput";
import { PartsUsedUpdateManyWithoutRepairsInput } from "./PartsUsedUpdateManyWithoutRepairsInput";

export type RepairUpdateInput = {
  date?: Date | null;
  cost?: number | null;
  description?: string | null;
  motorcycle?: MotorcycleWhereUniqueInput | null;
  mechanic?: MechanicWhereUniqueInput | null;
  partsUseds?: PartsUsedUpdateManyWithoutRepairsInput;
};

import { RepairUpdateManyWithoutMotorcyclesInput } from "./RepairUpdateManyWithoutMotorcyclesInput";
import { CustomerUpdateManyWithoutMotorcyclesInput } from "./CustomerUpdateManyWithoutMotorcyclesInput";

export type MotorcycleUpdateInput = {
  model?: string | null;
  year?: number | null;
  make?: string | null;
  repairs?: RepairUpdateManyWithoutMotorcyclesInput;
  customers?: CustomerUpdateManyWithoutMotorcyclesInput;
  owner?: string | null;
};

import { RepairCreateNestedManyWithoutMotorcyclesInput } from "./RepairCreateNestedManyWithoutMotorcyclesInput";
import { CustomerCreateNestedManyWithoutMotorcyclesInput } from "./CustomerCreateNestedManyWithoutMotorcyclesInput";

export type MotorcycleCreateInput = {
  model?: string | null;
  year?: number | null;
  make?: string | null;
  repairs?: RepairCreateNestedManyWithoutMotorcyclesInput;
  customers?: CustomerCreateNestedManyWithoutMotorcyclesInput;
  owner?: string | null;
};

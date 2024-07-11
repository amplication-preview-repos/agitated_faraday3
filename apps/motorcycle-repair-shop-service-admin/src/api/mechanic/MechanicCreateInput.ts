import { RepairCreateNestedManyWithoutMechanicsInput } from "./RepairCreateNestedManyWithoutMechanicsInput";

export type MechanicCreateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  specialization?: string | null;
  repairs?: RepairCreateNestedManyWithoutMechanicsInput;
};

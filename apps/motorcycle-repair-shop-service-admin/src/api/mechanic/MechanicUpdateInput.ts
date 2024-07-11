import { RepairUpdateManyWithoutMechanicsInput } from "./RepairUpdateManyWithoutMechanicsInput";

export type MechanicUpdateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  specialization?: string | null;
  repairs?: RepairUpdateManyWithoutMechanicsInput;
};

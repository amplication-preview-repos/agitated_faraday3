import { MotorcycleWhereUniqueInput } from "../motorcycle/MotorcycleWhereUniqueInput";

export type CustomerUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  motorcycle?: MotorcycleWhereUniqueInput | null;
};

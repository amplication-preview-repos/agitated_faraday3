import { MotorcycleWhereInput } from "./MotorcycleWhereInput";
import { MotorcycleOrderByInput } from "./MotorcycleOrderByInput";

export type MotorcycleFindManyArgs = {
  where?: MotorcycleWhereInput;
  orderBy?: Array<MotorcycleOrderByInput>;
  skip?: number;
  take?: number;
};

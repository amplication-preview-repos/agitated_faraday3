import { PartsUsedWhereInput } from "./PartsUsedWhereInput";
import { PartsUsedOrderByInput } from "./PartsUsedOrderByInput";

export type PartsUsedFindManyArgs = {
  where?: PartsUsedWhereInput;
  orderBy?: Array<PartsUsedOrderByInput>;
  skip?: number;
  take?: number;
};

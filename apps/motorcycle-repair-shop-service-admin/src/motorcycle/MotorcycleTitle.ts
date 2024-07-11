import { Motorcycle as TMotorcycle } from "../api/motorcycle/Motorcycle";

export const MOTORCYCLE_TITLE_FIELD = "model";

export const MotorcycleTitle = (record: TMotorcycle): string => {
  return record.model?.toString() || String(record.id);
};

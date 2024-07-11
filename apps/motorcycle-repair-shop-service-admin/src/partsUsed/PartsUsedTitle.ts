import { PartsUsed as TPartsUsed } from "../api/partsUsed/PartsUsed";

export const PARTSUSED_TITLE_FIELD = "partName";

export const PartsUsedTitle = (record: TPartsUsed): string => {
  return record.partName?.toString() || String(record.id);
};

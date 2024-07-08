import { Traveler as TTraveler } from "../api/traveler/Traveler";

export const TRAVELER_TITLE_FIELD = "name";

export const TravelerTitle = (record: TTraveler): string => {
  return record.name?.toString() || String(record.id);
};

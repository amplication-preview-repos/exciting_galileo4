import { Host as THost } from "../api/host/Host";

export const HOST_TITLE_FIELD = "name";

export const HostTitle = (record: THost): string => {
  return record.name?.toString() || String(record.id);
};

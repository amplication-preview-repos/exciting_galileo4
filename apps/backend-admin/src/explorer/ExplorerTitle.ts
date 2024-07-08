import { Explorer as TExplorer } from "../api/explorer/Explorer";

export const EXPLORER_TITLE_FIELD = "name";

export const ExplorerTitle = (record: TExplorer): string => {
  return record.name?.toString() || String(record.id);
};

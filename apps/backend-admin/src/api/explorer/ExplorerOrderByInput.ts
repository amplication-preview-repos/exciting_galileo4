import { SortOrder } from "../../util/SortOrder";

export type ExplorerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  name?: SortOrder;
};

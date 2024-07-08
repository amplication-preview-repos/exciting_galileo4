import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  explorerId?: SortOrder;
  hostId?: SortOrder;
};

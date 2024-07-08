import { SortOrder } from "../../util/SortOrder";

export type CommissionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  explorerId?: SortOrder;
};

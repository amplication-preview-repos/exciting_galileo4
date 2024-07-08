import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  travelerId?: SortOrder;
  accommodationId?: SortOrder;
  activityId?: SortOrder;
};

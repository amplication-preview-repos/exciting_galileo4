import { SortOrder } from "../../util/SortOrder";

export type AccommodationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  amenities?: SortOrder;
  explorerId?: SortOrder;
  hostId?: SortOrder;
};

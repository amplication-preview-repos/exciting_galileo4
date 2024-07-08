import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";
import { HostWhereUniqueInput } from "../host/HostWhereUniqueInput";
import { BookingUpdateManyWithoutActivitiesInput } from "./BookingUpdateManyWithoutActivitiesInput";

export type ActivityUpdateInput = {
  name?: string | null;
  description?: string | null;
  location?: string | null;
  explorer?: ExplorerWhereUniqueInput | null;
  host?: HostWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutActivitiesInput;
};

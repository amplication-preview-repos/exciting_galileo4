import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";
import { HostWhereUniqueInput } from "../host/HostWhereUniqueInput";
import { BookingUpdateManyWithoutAccommodationsInput } from "./BookingUpdateManyWithoutAccommodationsInput";

export type AccommodationUpdateInput = {
  name?: string | null;
  location?: string | null;
  amenities?: string | null;
  explorer?: ExplorerWhereUniqueInput | null;
  host?: HostWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutAccommodationsInput;
};

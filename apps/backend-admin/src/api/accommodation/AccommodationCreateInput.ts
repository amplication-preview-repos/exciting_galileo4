import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";
import { HostWhereUniqueInput } from "../host/HostWhereUniqueInput";
import { BookingCreateNestedManyWithoutAccommodationsInput } from "./BookingCreateNestedManyWithoutAccommodationsInput";

export type AccommodationCreateInput = {
  name?: string | null;
  location?: string | null;
  amenities?: string | null;
  explorer?: ExplorerWhereUniqueInput | null;
  host?: HostWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutAccommodationsInput;
};

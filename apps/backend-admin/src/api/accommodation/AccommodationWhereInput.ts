import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";
import { HostWhereUniqueInput } from "../host/HostWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type AccommodationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  amenities?: StringNullableFilter;
  explorer?: ExplorerWhereUniqueInput;
  host?: HostWhereUniqueInput;
  bookings?: BookingListRelationFilter;
};

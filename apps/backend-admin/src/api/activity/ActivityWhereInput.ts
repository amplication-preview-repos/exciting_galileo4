import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";
import { HostWhereUniqueInput } from "../host/HostWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type ActivityWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  explorer?: ExplorerWhereUniqueInput;
  host?: HostWhereUniqueInput;
  bookings?: BookingListRelationFilter;
};

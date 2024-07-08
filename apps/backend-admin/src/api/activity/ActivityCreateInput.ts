import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";
import { HostWhereUniqueInput } from "../host/HostWhereUniqueInput";
import { BookingCreateNestedManyWithoutActivitiesInput } from "./BookingCreateNestedManyWithoutActivitiesInput";

export type ActivityCreateInput = {
  name?: string | null;
  description?: string | null;
  location?: string | null;
  explorer?: ExplorerWhereUniqueInput | null;
  host?: HostWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutActivitiesInput;
};

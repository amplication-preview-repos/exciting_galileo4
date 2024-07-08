import { TravelerWhereUniqueInput } from "../traveler/TravelerWhereUniqueInput";
import { AccommodationWhereUniqueInput } from "../accommodation/AccommodationWhereUniqueInput";
import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";

export type BookingCreateInput = {
  status?: "Option1" | null;
  traveler?: TravelerWhereUniqueInput | null;
  accommodation?: AccommodationWhereUniqueInput | null;
  activity?: ActivityWhereUniqueInput | null;
};

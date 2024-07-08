import { StringFilter } from "../../util/StringFilter";
import { TravelerWhereUniqueInput } from "../traveler/TravelerWhereUniqueInput";
import { AccommodationWhereUniqueInput } from "../accommodation/AccommodationWhereUniqueInput";
import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  traveler?: TravelerWhereUniqueInput;
  accommodation?: AccommodationWhereUniqueInput;
  activity?: ActivityWhereUniqueInput;
};

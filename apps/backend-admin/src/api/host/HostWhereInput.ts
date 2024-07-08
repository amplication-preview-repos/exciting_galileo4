import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccommodationListRelationFilter } from "../accommodation/AccommodationListRelationFilter";
import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";

export type HostWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  accommodations?: AccommodationListRelationFilter;
  activities?: ActivityListRelationFilter;
};

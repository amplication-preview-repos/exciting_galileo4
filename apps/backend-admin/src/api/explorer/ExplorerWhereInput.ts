import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccommodationListRelationFilter } from "../accommodation/AccommodationListRelationFilter";
import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { CommissionListRelationFilter } from "../commission/CommissionListRelationFilter";

export type ExplorerWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  name?: StringNullableFilter;
  accommodations?: AccommodationListRelationFilter;
  activities?: ActivityListRelationFilter;
  commissions?: CommissionListRelationFilter;
};

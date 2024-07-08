import { Accommodation } from "../accommodation/Accommodation";
import { Activity } from "../activity/Activity";
import { Commission } from "../commission/Commission";

export type Explorer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  password: string | null;
  name: string | null;
  accommodations?: Array<Accommodation>;
  activities?: Array<Activity>;
  commissions?: Array<Commission>;
};

import { Accommodation } from "../accommodation/Accommodation";
import { Activity } from "../activity/Activity";

export type Host = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  password: string | null;
  accommodations?: Array<Accommodation>;
  activities?: Array<Activity>;
};

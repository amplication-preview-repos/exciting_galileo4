import { Traveler } from "../traveler/Traveler";
import { Accommodation } from "../accommodation/Accommodation";
import { Activity } from "../activity/Activity";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  traveler?: Traveler | null;
  accommodation?: Accommodation | null;
  activity?: Activity | null;
};

import { Explorer } from "../explorer/Explorer";
import { Host } from "../host/Host";
import { Booking } from "../booking/Booking";

export type Activity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  location: string | null;
  explorer?: Explorer | null;
  host?: Host | null;
  bookings?: Array<Booking>;
};

import { Explorer } from "../explorer/Explorer";
import { Host } from "../host/Host";
import { Booking } from "../booking/Booking";

export type Accommodation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  amenities: string | null;
  explorer?: Explorer | null;
  host?: Host | null;
  bookings?: Array<Booking>;
};

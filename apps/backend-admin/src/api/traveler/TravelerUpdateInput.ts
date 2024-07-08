import { BookingUpdateManyWithoutTravelersInput } from "./BookingUpdateManyWithoutTravelersInput";

export type TravelerUpdateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  bookings?: BookingUpdateManyWithoutTravelersInput;
};

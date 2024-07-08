import { BookingCreateNestedManyWithoutTravelersInput } from "./BookingCreateNestedManyWithoutTravelersInput";

export type TravelerCreateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  bookings?: BookingCreateNestedManyWithoutTravelersInput;
};

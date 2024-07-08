import { AccommodationCreateNestedManyWithoutHostsInput } from "./AccommodationCreateNestedManyWithoutHostsInput";
import { ActivityCreateNestedManyWithoutHostsInput } from "./ActivityCreateNestedManyWithoutHostsInput";

export type HostCreateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  accommodations?: AccommodationCreateNestedManyWithoutHostsInput;
  activities?: ActivityCreateNestedManyWithoutHostsInput;
};

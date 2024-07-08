import { AccommodationUpdateManyWithoutHostsInput } from "./AccommodationUpdateManyWithoutHostsInput";
import { ActivityUpdateManyWithoutHostsInput } from "./ActivityUpdateManyWithoutHostsInput";

export type HostUpdateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  accommodations?: AccommodationUpdateManyWithoutHostsInput;
  activities?: ActivityUpdateManyWithoutHostsInput;
};

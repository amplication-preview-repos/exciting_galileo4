import { AccommodationUpdateManyWithoutExplorersInput } from "./AccommodationUpdateManyWithoutExplorersInput";
import { ActivityUpdateManyWithoutExplorersInput } from "./ActivityUpdateManyWithoutExplorersInput";
import { CommissionUpdateManyWithoutExplorersInput } from "./CommissionUpdateManyWithoutExplorersInput";

export type ExplorerUpdateInput = {
  email?: string | null;
  password?: string | null;
  name?: string | null;
  accommodations?: AccommodationUpdateManyWithoutExplorersInput;
  activities?: ActivityUpdateManyWithoutExplorersInput;
  commissions?: CommissionUpdateManyWithoutExplorersInput;
};

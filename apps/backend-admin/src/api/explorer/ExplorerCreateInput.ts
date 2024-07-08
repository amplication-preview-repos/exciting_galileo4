import { AccommodationCreateNestedManyWithoutExplorersInput } from "./AccommodationCreateNestedManyWithoutExplorersInput";
import { ActivityCreateNestedManyWithoutExplorersInput } from "./ActivityCreateNestedManyWithoutExplorersInput";
import { CommissionCreateNestedManyWithoutExplorersInput } from "./CommissionCreateNestedManyWithoutExplorersInput";

export type ExplorerCreateInput = {
  email?: string | null;
  password?: string | null;
  name?: string | null;
  accommodations?: AccommodationCreateNestedManyWithoutExplorersInput;
  activities?: ActivityCreateNestedManyWithoutExplorersInput;
  commissions?: CommissionCreateNestedManyWithoutExplorersInput;
};

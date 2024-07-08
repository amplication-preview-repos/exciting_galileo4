import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";

export type CommissionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  explorer?: ExplorerWhereUniqueInput;
};

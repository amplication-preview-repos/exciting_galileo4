import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";

export type CommissionCreateInput = {
  amount?: number | null;
  explorer?: ExplorerWhereUniqueInput | null;
};

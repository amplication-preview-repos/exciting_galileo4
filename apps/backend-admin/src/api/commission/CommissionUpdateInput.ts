import { ExplorerWhereUniqueInput } from "../explorer/ExplorerWhereUniqueInput";

export type CommissionUpdateInput = {
  amount?: number | null;
  explorer?: ExplorerWhereUniqueInput | null;
};

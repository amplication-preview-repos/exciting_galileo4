import { ExplorerWhereInput } from "./ExplorerWhereInput";
import { ExplorerOrderByInput } from "./ExplorerOrderByInput";

export type ExplorerFindManyArgs = {
  where?: ExplorerWhereInput;
  orderBy?: Array<ExplorerOrderByInput>;
  skip?: number;
  take?: number;
};

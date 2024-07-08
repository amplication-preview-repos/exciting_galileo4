import { TravelerWhereInput } from "./TravelerWhereInput";
import { TravelerOrderByInput } from "./TravelerOrderByInput";

export type TravelerFindManyArgs = {
  where?: TravelerWhereInput;
  orderBy?: Array<TravelerOrderByInput>;
  skip?: number;
  take?: number;
};

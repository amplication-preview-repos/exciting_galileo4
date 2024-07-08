import * as graphql from "@nestjs/graphql";
import { ExplorerResolverBase } from "./base/explorer.resolver.base";
import { Explorer } from "./base/Explorer";
import { ExplorerService } from "./explorer.service";

@graphql.Resolver(() => Explorer)
export class ExplorerResolver extends ExplorerResolverBase {
  constructor(protected readonly service: ExplorerService) {
    super(service);
  }
}

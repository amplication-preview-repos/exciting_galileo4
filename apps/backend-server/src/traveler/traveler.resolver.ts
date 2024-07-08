import * as graphql from "@nestjs/graphql";
import { TravelerResolverBase } from "./base/traveler.resolver.base";
import { Traveler } from "./base/Traveler";
import { TravelerService } from "./traveler.service";

@graphql.Resolver(() => Traveler)
export class TravelerResolver extends TravelerResolverBase {
  constructor(protected readonly service: TravelerService) {
    super(service);
  }
}

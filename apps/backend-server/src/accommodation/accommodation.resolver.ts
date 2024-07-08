import * as graphql from "@nestjs/graphql";
import { AccommodationResolverBase } from "./base/accommodation.resolver.base";
import { Accommodation } from "./base/Accommodation";
import { AccommodationService } from "./accommodation.service";

@graphql.Resolver(() => Accommodation)
export class AccommodationResolver extends AccommodationResolverBase {
  constructor(protected readonly service: AccommodationService) {
    super(service);
  }
}

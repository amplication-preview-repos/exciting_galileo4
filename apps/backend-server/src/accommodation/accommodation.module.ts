import { Module } from "@nestjs/common";
import { AccommodationModuleBase } from "./base/accommodation.module.base";
import { AccommodationService } from "./accommodation.service";
import { AccommodationController } from "./accommodation.controller";
import { AccommodationResolver } from "./accommodation.resolver";

@Module({
  imports: [AccommodationModuleBase],
  controllers: [AccommodationController],
  providers: [AccommodationService, AccommodationResolver],
  exports: [AccommodationService],
})
export class AccommodationModule {}

import { Module } from "@nestjs/common";
import { TravelerModuleBase } from "./base/traveler.module.base";
import { TravelerService } from "./traveler.service";
import { TravelerController } from "./traveler.controller";
import { TravelerResolver } from "./traveler.resolver";

@Module({
  imports: [TravelerModuleBase],
  controllers: [TravelerController],
  providers: [TravelerService, TravelerResolver],
  exports: [TravelerService],
})
export class TravelerModule {}

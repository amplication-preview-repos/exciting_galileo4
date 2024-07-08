import { Module } from "@nestjs/common";
import { DirectusIntegrationService } from "./directusintegration.service";
import { DirectusIntegrationController } from "./directusintegration.controller";
import { DirectusIntegrationResolver } from "./directusintegration.resolver";

@Module({
  controllers: [DirectusIntegrationController],
  providers: [DirectusIntegrationService, DirectusIntegrationResolver],
  exports: [DirectusIntegrationService],
})
export class DirectusIntegrationModule {}

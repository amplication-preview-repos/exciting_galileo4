import { Module } from "@nestjs/common";
import { ExplorerModuleBase } from "./base/explorer.module.base";
import { ExplorerService } from "./explorer.service";
import { ExplorerController } from "./explorer.controller";
import { ExplorerResolver } from "./explorer.resolver";

@Module({
  imports: [ExplorerModuleBase],
  controllers: [ExplorerController],
  providers: [ExplorerService, ExplorerResolver],
  exports: [ExplorerService],
})
export class ExplorerModule {}

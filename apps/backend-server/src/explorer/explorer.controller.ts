import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExplorerService } from "./explorer.service";
import { ExplorerControllerBase } from "./base/explorer.controller.base";

@swagger.ApiTags("explorers")
@common.Controller("explorers")
export class ExplorerController extends ExplorerControllerBase {
  constructor(protected readonly service: ExplorerService) {
    super(service);
  }
}

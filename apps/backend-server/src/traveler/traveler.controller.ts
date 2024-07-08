import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TravelerService } from "./traveler.service";
import { TravelerControllerBase } from "./base/traveler.controller.base";

@swagger.ApiTags("travelers")
@common.Controller("travelers")
export class TravelerController extends TravelerControllerBase {
  constructor(protected readonly service: TravelerService) {
    super(service);
  }
}

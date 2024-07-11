import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PartsUsedService } from "./partsUsed.service";
import { PartsUsedControllerBase } from "./base/partsUsed.controller.base";

@swagger.ApiTags("partsUseds")
@common.Controller("partsUseds")
export class PartsUsedController extends PartsUsedControllerBase {
  constructor(protected readonly service: PartsUsedService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MotorcycleService } from "./motorcycle.service";
import { MotorcycleControllerBase } from "./base/motorcycle.controller.base";

@swagger.ApiTags("motorcycles")
@common.Controller("motorcycles")
export class MotorcycleController extends MotorcycleControllerBase {
  constructor(protected readonly service: MotorcycleService) {
    super(service);
  }
}

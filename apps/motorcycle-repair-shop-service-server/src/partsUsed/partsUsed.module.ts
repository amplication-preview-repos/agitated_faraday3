import { Module } from "@nestjs/common";
import { PartsUsedModuleBase } from "./base/partsUsed.module.base";
import { PartsUsedService } from "./partsUsed.service";
import { PartsUsedController } from "./partsUsed.controller";
import { PartsUsedResolver } from "./partsUsed.resolver";

@Module({
  imports: [PartsUsedModuleBase],
  controllers: [PartsUsedController],
  providers: [PartsUsedService, PartsUsedResolver],
  exports: [PartsUsedService],
})
export class PartsUsedModule {}

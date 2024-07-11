import { Module } from "@nestjs/common";
import { MotorcycleModuleBase } from "./base/motorcycle.module.base";
import { MotorcycleService } from "./motorcycle.service";
import { MotorcycleController } from "./motorcycle.controller";
import { MotorcycleResolver } from "./motorcycle.resolver";

@Module({
  imports: [MotorcycleModuleBase],
  controllers: [MotorcycleController],
  providers: [MotorcycleService, MotorcycleResolver],
  exports: [MotorcycleService],
})
export class MotorcycleModule {}

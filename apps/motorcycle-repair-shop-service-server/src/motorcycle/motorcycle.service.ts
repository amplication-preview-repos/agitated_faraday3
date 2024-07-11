import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MotorcycleServiceBase } from "./base/motorcycle.service.base";

@Injectable()
export class MotorcycleService extends MotorcycleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

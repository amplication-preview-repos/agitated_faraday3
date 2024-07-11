import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PartsUsedServiceBase } from "./base/partsUsed.service.base";

@Injectable()
export class PartsUsedService extends PartsUsedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import * as graphql from "@nestjs/graphql";
import { PartsUsedResolverBase } from "./base/partsUsed.resolver.base";
import { PartsUsed } from "./base/PartsUsed";
import { PartsUsedService } from "./partsUsed.service";

@graphql.Resolver(() => PartsUsed)
export class PartsUsedResolver extends PartsUsedResolverBase {
  constructor(protected readonly service: PartsUsedService) {
    super(service);
  }
}

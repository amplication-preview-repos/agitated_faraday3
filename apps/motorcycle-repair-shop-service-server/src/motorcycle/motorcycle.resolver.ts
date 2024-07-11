import * as graphql from "@nestjs/graphql";
import { MotorcycleResolverBase } from "./base/motorcycle.resolver.base";
import { Motorcycle } from "./base/Motorcycle";
import { MotorcycleService } from "./motorcycle.service";

@graphql.Resolver(() => Motorcycle)
export class MotorcycleResolver extends MotorcycleResolverBase {
  constructor(protected readonly service: MotorcycleService) {
    super(service);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { RepairUpdateManyWithoutMotorcyclesInput } from "./RepairUpdateManyWithoutMotorcyclesInput";
import { Type } from "class-transformer";
import { CustomerUpdateManyWithoutMotorcyclesInput } from "./CustomerUpdateManyWithoutMotorcyclesInput";

@InputType()
class MotorcycleUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  make?: string | null;

  @ApiProperty({
    required: false,
    type: () => RepairUpdateManyWithoutMotorcyclesInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateManyWithoutMotorcyclesInput)
  @IsOptional()
  @Field(() => RepairUpdateManyWithoutMotorcyclesInput, {
    nullable: true,
  })
  repairs?: RepairUpdateManyWithoutMotorcyclesInput;

  @ApiProperty({
    required: false,
    type: () => CustomerUpdateManyWithoutMotorcyclesInput,
  })
  @ValidateNested()
  @Type(() => CustomerUpdateManyWithoutMotorcyclesInput)
  @IsOptional()
  @Field(() => CustomerUpdateManyWithoutMotorcyclesInput, {
    nullable: true,
  })
  customers?: CustomerUpdateManyWithoutMotorcyclesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  owner?: string | null;
}

export { MotorcycleUpdateInput as MotorcycleUpdateInput };

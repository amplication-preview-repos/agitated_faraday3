/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  IsDate,
  IsOptional,
  IsNumber,
  Min,
  Max,
  MaxLength,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { Motorcycle } from "../../motorcycle/base/Motorcycle";
import { Mechanic } from "../../mechanic/base/Mechanic";
import { PartsUsed } from "../../partsUsed/base/PartsUsed";

@ObjectType()
class Repair {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cost!: number | null;

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
  description!: string | null;

  @ApiProperty({
    required: false,
    type: () => Motorcycle,
  })
  @ValidateNested()
  @Type(() => Motorcycle)
  @IsOptional()
  motorcycle?: Motorcycle | null;

  @ApiProperty({
    required: false,
    type: () => Mechanic,
  })
  @ValidateNested()
  @Type(() => Mechanic)
  @IsOptional()
  mechanic?: Mechanic | null;

  @ApiProperty({
    required: false,
    type: () => [PartsUsed],
  })
  @ValidateNested()
  @Type(() => PartsUsed)
  @IsOptional()
  partsUseds?: Array<PartsUsed>;
}

export { Repair as Repair };

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
  ValidateNested,
} from "class-validator";
import { BookingUpdateManyWithoutTravelersInput } from "./BookingUpdateManyWithoutTravelersInput";
import { Type } from "class-transformer";

@InputType()
class TravelerUpdateInput {
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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => BookingUpdateManyWithoutTravelersInput,
  })
  @ValidateNested()
  @Type(() => BookingUpdateManyWithoutTravelersInput)
  @IsOptional()
  @Field(() => BookingUpdateManyWithoutTravelersInput, {
    nullable: true,
  })
  bookings?: BookingUpdateManyWithoutTravelersInput;
}

export { TravelerUpdateInput as TravelerUpdateInput };

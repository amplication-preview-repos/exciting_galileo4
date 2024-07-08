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
import { TravelerWhereInput } from "./TravelerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TravelerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TravelerWhereInput,
  })
  @ValidateNested()
  @Type(() => TravelerWhereInput)
  @IsOptional()
  @Field(() => TravelerWhereInput, {
    nullable: true,
  })
  every?: TravelerWhereInput;

  @ApiProperty({
    required: false,
    type: () => TravelerWhereInput,
  })
  @ValidateNested()
  @Type(() => TravelerWhereInput)
  @IsOptional()
  @Field(() => TravelerWhereInput, {
    nullable: true,
  })
  some?: TravelerWhereInput;

  @ApiProperty({
    required: false,
    type: () => TravelerWhereInput,
  })
  @ValidateNested()
  @Type(() => TravelerWhereInput)
  @IsOptional()
  @Field(() => TravelerWhereInput, {
    nullable: true,
  })
  none?: TravelerWhereInput;
}
export { TravelerListRelationFilter as TravelerListRelationFilter };

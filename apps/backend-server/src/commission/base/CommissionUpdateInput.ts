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
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ExplorerWhereUniqueInput } from "../../explorer/base/ExplorerWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CommissionUpdateInput {
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
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => ExplorerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExplorerWhereUniqueInput)
  @IsOptional()
  @Field(() => ExplorerWhereUniqueInput, {
    nullable: true,
  })
  explorer?: ExplorerWhereUniqueInput | null;
}

export { CommissionUpdateInput as CommissionUpdateInput };

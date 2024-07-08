/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExplorerWhereUniqueInput } from "./ExplorerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExplorerUpdateInput } from "./ExplorerUpdateInput";

@ArgsType()
class UpdateExplorerArgs {
  @ApiProperty({
    required: true,
    type: () => ExplorerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExplorerWhereUniqueInput)
  @Field(() => ExplorerWhereUniqueInput, { nullable: false })
  where!: ExplorerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ExplorerUpdateInput,
  })
  @ValidateNested()
  @Type(() => ExplorerUpdateInput)
  @Field(() => ExplorerUpdateInput, { nullable: false })
  data!: ExplorerUpdateInput;
}

export { UpdateExplorerArgs as UpdateExplorerArgs };

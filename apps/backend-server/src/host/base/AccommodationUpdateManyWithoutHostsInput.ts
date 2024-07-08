/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccommodationWhereUniqueInput } from "../../accommodation/base/AccommodationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AccommodationUpdateManyWithoutHostsInput {
  @Field(() => [AccommodationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccommodationWhereUniqueInput],
  })
  connect?: Array<AccommodationWhereUniqueInput>;

  @Field(() => [AccommodationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccommodationWhereUniqueInput],
  })
  disconnect?: Array<AccommodationWhereUniqueInput>;

  @Field(() => [AccommodationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccommodationWhereUniqueInput],
  })
  set?: Array<AccommodationWhereUniqueInput>;
}

export { AccommodationUpdateManyWithoutHostsInput as AccommodationUpdateManyWithoutHostsInput };

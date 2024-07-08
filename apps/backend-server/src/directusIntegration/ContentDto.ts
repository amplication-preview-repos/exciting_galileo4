import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("ContentDtoObject")
class ContentDto {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { ContentDto as ContentDto };
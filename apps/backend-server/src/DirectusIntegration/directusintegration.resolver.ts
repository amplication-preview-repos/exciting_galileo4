import * as graphql from "@nestjs/graphql";
import { ContentDto } from "../directusIntegration/ContentDto";
import { IdDto } from "../directusIntegration/IdDto";
import { DirectusIntegrationService } from "./directusintegration.service";

export class DirectusIntegrationResolver {
  constructor(protected readonly service: DirectusIntegrationService) {}

  @graphql.Mutation(() => ContentDto)
  async CreateContent(
    @graphql.Args()
    args: ContentDto
  ): Promise<ContentDto> {
    return this.service.CreateContent(args);
  }

  @graphql.Mutation(() => ContentDto)
  async DeleteContent(
    @graphql.Args()
    args: IdDto
  ): Promise<ContentDto> {
    return this.service.DeleteContent(args);
  }

  @graphql.Query(() => ContentDto)
  async FetchContent(
    @graphql.Args()
    args: IdDto
  ): Promise<ContentDto> {
    return this.service.FetchContent(args);
  }

  @graphql.Mutation(() => ContentDto)
  async UpdateContent(
    @graphql.Args()
    args: ContentDto
  ): Promise<ContentDto> {
    return this.service.UpdateContent(args);
  }
}

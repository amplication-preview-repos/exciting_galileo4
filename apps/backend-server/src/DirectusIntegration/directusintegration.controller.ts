import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DirectusIntegrationService } from "./directusintegration.service";
import { ContentDto } from "../directusIntegration/ContentDto";

@swagger.ApiTags("directusIntegrations")
@common.Controller("directusIntegrations")
export class DirectusIntegrationController {
  constructor(protected readonly service: DirectusIntegrationService) {}

  @common.Post("/create-content")
  @swagger.ApiOkResponse({
    type: ContentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateContent(
    @common.Body()
    body: ContentDto
  ): Promise<ContentDto> {
        return this.service.CreateContent(body);
      }

  @common.Delete("/delete-content/:id")
  @swagger.ApiOkResponse({
    type: ContentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteContent(
    @common.Body()
    body: ContentDto
  ): Promise<ContentDto> {
        return this.service.DeleteContent(body);
      }

  @common.Get("/fetch-content")
  @swagger.ApiOkResponse({
    type: ContentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchContent(
    @common.Body()
    body: ContentDto
  ): Promise<ContentDto> {
        return this.service.FetchContent(body);
      }

  @common.Patch("/update-content/:id")
  @swagger.ApiOkResponse({
    type: ContentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateContent(
    @common.Body()
    body: ContentDto
  ): Promise<ContentDto> {
        return this.service.UpdateContent(body);
      }
}

import { Injectable } from "@nestjs/common";
import { ContentDto } from "../directusIntegration/ContentDto";
import { IdDto } from "../directusIntegration/IdDto";

@Injectable()
export class DirectusIntegrationService {
  constructor() {}
  async CreateContent(args: ContentDto): Promise<ContentDto> {
    throw new Error("Not implemented");
  }
  async DeleteContent(args: IdDto): Promise<ContentDto> {
    throw new Error("Not implemented");
  }
  async FetchContent(args: IdDto): Promise<ContentDto> {
    throw new Error("Not implemented");
  }
  async UpdateContent(args: ContentDto): Promise<ContentDto> {
    throw new Error("Not implemented");
  }
}

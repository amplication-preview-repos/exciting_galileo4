import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TravelerServiceBase } from "./base/traveler.service.base";

@Injectable()
export class TravelerService extends TravelerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

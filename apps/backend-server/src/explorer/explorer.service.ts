import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExplorerServiceBase } from "./base/explorer.service.base";

@Injectable()
export class ExplorerService extends ExplorerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

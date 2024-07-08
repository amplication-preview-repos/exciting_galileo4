/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Explorer as PrismaExplorer,
  Accommodation as PrismaAccommodation,
  Activity as PrismaActivity,
  Commission as PrismaCommission,
} from "@prisma/client";

export class ExplorerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ExplorerCountArgs, "select">): Promise<number> {
    return this.prisma.explorer.count(args);
  }

  async explorers(
    args: Prisma.ExplorerFindManyArgs
  ): Promise<PrismaExplorer[]> {
    return this.prisma.explorer.findMany(args);
  }
  async explorer(
    args: Prisma.ExplorerFindUniqueArgs
  ): Promise<PrismaExplorer | null> {
    return this.prisma.explorer.findUnique(args);
  }
  async createExplorer(
    args: Prisma.ExplorerCreateArgs
  ): Promise<PrismaExplorer> {
    return this.prisma.explorer.create(args);
  }
  async updateExplorer(
    args: Prisma.ExplorerUpdateArgs
  ): Promise<PrismaExplorer> {
    return this.prisma.explorer.update(args);
  }
  async deleteExplorer(
    args: Prisma.ExplorerDeleteArgs
  ): Promise<PrismaExplorer> {
    return this.prisma.explorer.delete(args);
  }

  async findAccommodations(
    parentId: string,
    args: Prisma.AccommodationFindManyArgs
  ): Promise<PrismaAccommodation[]> {
    return this.prisma.explorer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accommodations(args);
  }

  async findActivities(
    parentId: string,
    args: Prisma.ActivityFindManyArgs
  ): Promise<PrismaActivity[]> {
    return this.prisma.explorer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .activities(args);
  }

  async findCommissions(
    parentId: string,
    args: Prisma.CommissionFindManyArgs
  ): Promise<PrismaCommission[]> {
    return this.prisma.explorer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .commissions(args);
  }
}

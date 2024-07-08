/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CommissionService } from "../commission.service";
import { CommissionCreateInput } from "./CommissionCreateInput";
import { Commission } from "./Commission";
import { CommissionFindManyArgs } from "./CommissionFindManyArgs";
import { CommissionWhereUniqueInput } from "./CommissionWhereUniqueInput";
import { CommissionUpdateInput } from "./CommissionUpdateInput";

export class CommissionControllerBase {
  constructor(protected readonly service: CommissionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Commission })
  async createCommission(
    @common.Body() data: CommissionCreateInput
  ): Promise<Commission> {
    return await this.service.createCommission({
      data: {
        ...data,

        explorer: data.explorer
          ? {
              connect: data.explorer,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,

        explorer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Commission] })
  @ApiNestedQuery(CommissionFindManyArgs)
  async commissions(@common.Req() request: Request): Promise<Commission[]> {
    const args = plainToClass(CommissionFindManyArgs, request.query);
    return this.service.commissions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,

        explorer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Commission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async commission(
    @common.Param() params: CommissionWhereUniqueInput
  ): Promise<Commission | null> {
    const result = await this.service.commission({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,

        explorer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Commission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCommission(
    @common.Param() params: CommissionWhereUniqueInput,
    @common.Body() data: CommissionUpdateInput
  ): Promise<Commission | null> {
    try {
      return await this.service.updateCommission({
        where: params,
        data: {
          ...data,

          explorer: data.explorer
            ? {
                connect: data.explorer,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,

          explorer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Commission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCommission(
    @common.Param() params: CommissionWhereUniqueInput
  ): Promise<Commission | null> {
    try {
      return await this.service.deleteCommission({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,

          explorer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

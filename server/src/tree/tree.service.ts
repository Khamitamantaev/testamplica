import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TreeServiceBase } from "./base/tree.service.base";

@Injectable()
export class TreeService extends TreeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

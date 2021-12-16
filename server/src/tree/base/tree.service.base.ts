import { PrismaService } from "nestjs-prisma";
import { Prisma, Tree } from "@prisma/client";

export class TreeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TreeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreeFindManyArgs>
  ): Promise<number> {
    return this.prisma.tree.count(args);
  }

  async findMany<T extends Prisma.TreeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreeFindManyArgs>
  ): Promise<Tree[]> {
    return this.prisma.tree.findMany(args);
  }
  async findOne<T extends Prisma.TreeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreeFindUniqueArgs>
  ): Promise<Tree | null> {
    return this.prisma.tree.findUnique(args);
  }
  async create<T extends Prisma.TreeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreeCreateArgs>
  ): Promise<Tree> {
    return this.prisma.tree.create<T>(args);
  }
  async update<T extends Prisma.TreeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreeUpdateArgs>
  ): Promise<Tree> {
    return this.prisma.tree.update<T>(args);
  }
  async delete<T extends Prisma.TreeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreeDeleteArgs>
  ): Promise<Tree> {
    return this.prisma.tree.delete(args);
  }
}

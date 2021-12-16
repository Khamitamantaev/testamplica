import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTreeArgs } from "./CreateTreeArgs";
import { UpdateTreeArgs } from "./UpdateTreeArgs";
import { DeleteTreeArgs } from "./DeleteTreeArgs";
import { TreeFindManyArgs } from "./TreeFindManyArgs";
import { TreeFindUniqueArgs } from "./TreeFindUniqueArgs";
import { Tree } from "./Tree";
import { TreeService } from "../tree.service";

@graphql.Resolver(() => Tree)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreeResolverBase {
  constructor(
    protected readonly service: TreeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  async _treesMeta(
    @graphql.Args() args: TreeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Tree])
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  async trees(
    @graphql.Args() args: TreeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tree[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tree",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Tree, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "own",
  })
  async tree(
    @graphql.Args() args: TreeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tree | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Tree",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Tree)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "create",
    possession: "any",
  })
  async createTree(
    @graphql.Args() args: CreateTreeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tree> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Tree",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tree"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tree)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  async updateTree(
    @graphql.Args() args: UpdateTreeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tree | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Tree",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tree"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tree)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "delete",
    possession: "any",
  })
  async deleteTree(@graphql.Args() args: DeleteTreeArgs): Promise<Tree | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

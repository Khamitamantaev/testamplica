import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TreeResolverBase } from "./base/tree.resolver.base";
import { Tree } from "./base/Tree";
import { TreeService } from "./tree.service";

@graphql.Resolver(() => Tree)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreeResolver extends TreeResolverBase {
  constructor(
    protected readonly service: TreeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

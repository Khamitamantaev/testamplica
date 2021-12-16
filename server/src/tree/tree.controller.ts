import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TreeService } from "./tree.service";
import { TreeControllerBase } from "./base/tree.controller.base";

@swagger.ApiTags("trees")
@common.Controller("trees")
export class TreeController extends TreeControllerBase {
  constructor(
    protected readonly service: TreeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

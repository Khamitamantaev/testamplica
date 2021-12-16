import { Module } from "@nestjs/common";
import { TreeModuleBase } from "./base/tree.module.base";
import { TreeService } from "./tree.service";
import { TreeController } from "./tree.controller";
import { TreeResolver } from "./tree.resolver";

@Module({
  imports: [TreeModuleBase],
  controllers: [TreeController],
  providers: [TreeService, TreeResolver],
  exports: [TreeService],
})
export class TreeModule {}

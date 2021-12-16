import { ArgsType, Field } from "@nestjs/graphql";
import { TreeWhereUniqueInput } from "./TreeWhereUniqueInput";

@ArgsType()
class TreeFindUniqueArgs {
  @Field(() => TreeWhereUniqueInput, { nullable: false })
  where!: TreeWhereUniqueInput;
}

export { TreeFindUniqueArgs };

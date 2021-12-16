import { ArgsType, Field } from "@nestjs/graphql";
import { TreeWhereUniqueInput } from "./TreeWhereUniqueInput";
import { TreeUpdateInput } from "./TreeUpdateInput";

@ArgsType()
class UpdateTreeArgs {
  @Field(() => TreeWhereUniqueInput, { nullable: false })
  where!: TreeWhereUniqueInput;
  @Field(() => TreeUpdateInput, { nullable: false })
  data!: TreeUpdateInput;
}

export { UpdateTreeArgs };

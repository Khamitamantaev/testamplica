import { ArgsType, Field } from "@nestjs/graphql";
import { TreeWhereUniqueInput } from "./TreeWhereUniqueInput";

@ArgsType()
class DeleteTreeArgs {
  @Field(() => TreeWhereUniqueInput, { nullable: false })
  where!: TreeWhereUniqueInput;
}

export { DeleteTreeArgs };

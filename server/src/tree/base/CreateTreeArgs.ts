import { ArgsType, Field } from "@nestjs/graphql";
import { TreeCreateInput } from "./TreeCreateInput";

@ArgsType()
class CreateTreeArgs {
  @Field(() => TreeCreateInput, { nullable: false })
  data!: TreeCreateInput;
}

export { CreateTreeArgs };

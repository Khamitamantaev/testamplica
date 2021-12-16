import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TreeWhereInput } from "./TreeWhereInput";
import { Type } from "class-transformer";
import { TreeOrderByInput } from "./TreeOrderByInput";

@ArgsType()
class TreeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TreeWhereInput,
  })
  @Field(() => TreeWhereInput, { nullable: true })
  @Type(() => TreeWhereInput)
  where?: TreeWhereInput;

  @ApiProperty({
    required: false,
    type: TreeOrderByInput,
  })
  @Field(() => TreeOrderByInput, { nullable: true })
  @Type(() => TreeOrderByInput)
  orderBy?: TreeOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TreeFindManyArgs };

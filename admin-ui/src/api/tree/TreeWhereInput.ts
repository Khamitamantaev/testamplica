import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TreeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};

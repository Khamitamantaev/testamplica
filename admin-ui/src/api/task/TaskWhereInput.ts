import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  estimationDays?: IntNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringFilter;
};

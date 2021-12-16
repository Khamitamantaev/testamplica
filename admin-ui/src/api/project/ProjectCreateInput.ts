import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
};

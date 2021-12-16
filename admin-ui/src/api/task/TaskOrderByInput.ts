import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  estimationDays?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

import { Project } from "../project/Project";

export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  estimationDays: number | null;
  id: string;
  project?: Project | null;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string;
  updatedAt: Date;
};

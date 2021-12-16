import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Assigned To" source="assignedTo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Estimation (days)" source="estimationDays" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Date" source="startDate" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="Project Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};

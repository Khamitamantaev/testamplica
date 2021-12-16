import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="Project Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MotorcycleTitle } from "../motorcycle/MotorcycleTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="address" multiline source="address" />
        <ReferenceInput
          source="motorcycle.id"
          reference="Motorcycle"
          label="Motorcycle"
        >
          <SelectInput optionText={MotorcycleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

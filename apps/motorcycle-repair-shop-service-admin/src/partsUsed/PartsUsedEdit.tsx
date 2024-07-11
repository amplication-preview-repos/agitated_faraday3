import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RepairTitle } from "../repair/RepairTitle";

export const PartsUsedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="partName" source="partName" />
        <TextInput label="partNumber" source="partNumber" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="cost" source="cost" />
        <ReferenceInput source="repair.id" reference="Repair" label="repair">
          <SelectInput optionText={RepairTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

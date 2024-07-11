import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RepairTitle } from "../repair/RepairTitle";

export const PartsUsedCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="partName" source="partName" />
        <TextInput label="partNumber" source="partNumber" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="cost" source="cost" />
        <ReferenceInput source="repair.id" reference="Repair" label="repair">
          <SelectInput optionText={RepairTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

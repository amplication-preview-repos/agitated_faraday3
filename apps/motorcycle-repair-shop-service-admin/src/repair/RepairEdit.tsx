import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MotorcycleTitle } from "../motorcycle/MotorcycleTitle";
import { MechanicTitle } from "../mechanic/MechanicTitle";
import { PartsUsedTitle } from "../partsUsed/PartsUsedTitle";

export const RepairEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="cost" source="cost" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="motorcycle.id"
          reference="Motorcycle"
          label="motorcycle"
        >
          <SelectInput optionText={MotorcycleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="mechanic.id"
          reference="Mechanic"
          label="mechanic"
        >
          <SelectInput optionText={MechanicTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="partsUseds"
          reference="PartsUsed"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PartsUsedTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { REPAIR_TITLE_FIELD } from "./RepairTitle";
import { MOTORCYCLE_TITLE_FIELD } from "../motorcycle/MotorcycleTitle";
import { MECHANIC_TITLE_FIELD } from "../mechanic/MechanicTitle";

export const RepairShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="cost" source="cost" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="motorcycle"
          source="motorcycle.id"
          reference="Motorcycle"
        >
          <TextField source={MOTORCYCLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="mechanic"
          source="mechanic.id"
          reference="Mechanic"
        >
          <TextField source={MECHANIC_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="PartsUsed"
          target="repairId"
          label="PartsUseds"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="partName" source="partName" />
            <TextField label="partNumber" source="partNumber" />
            <TextField label="quantity" source="quantity" />
            <TextField label="cost" source="cost" />
            <ReferenceField
              label="repair"
              source="repair.id"
              reference="Repair"
            >
              <TextField source={REPAIR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

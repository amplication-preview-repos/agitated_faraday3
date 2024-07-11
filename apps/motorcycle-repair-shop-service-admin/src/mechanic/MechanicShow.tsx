import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MOTORCYCLE_TITLE_FIELD } from "../motorcycle/MotorcycleTitle";
import { MECHANIC_TITLE_FIELD } from "./MechanicTitle";

export const MechanicShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="email" source="email" />
        <TextField label="specialization" source="specialization" />
        <ReferenceManyField
          reference="Repair"
          target="mechanicId"
          label="Repairs"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

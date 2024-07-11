import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";

export const PartsUsedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="partName" source="partName" />
        <TextField label="partNumber" source="partNumber" />
        <TextField label="quantity" source="quantity" />
        <TextField label="cost" source="cost" />
        <ReferenceField label="repair" source="repair.id" reference="Repair">
          <TextField source={REPAIR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

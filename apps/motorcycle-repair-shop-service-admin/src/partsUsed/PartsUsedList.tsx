import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";

export const PartsUsedList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PartsUseds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

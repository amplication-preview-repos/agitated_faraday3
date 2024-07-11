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
import { MOTORCYCLE_TITLE_FIELD } from "../motorcycle/MotorcycleTitle";
import { MECHANIC_TITLE_FIELD } from "../mechanic/MechanicTitle";

export const RepairList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Repairs"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

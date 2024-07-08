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
import { EXPLORER_TITLE_FIELD } from "../explorer/ExplorerTitle";
import { HOST_TITLE_FIELD } from "../host/HostTitle";

export const ActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Activities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <ReferenceField
          label="explorer"
          source="explorer.id"
          reference="Explorer"
        >
          <TextField source={EXPLORER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="host" source="host.id" reference="Host">
          <TextField source={HOST_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

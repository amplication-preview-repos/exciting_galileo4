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

import { EXPLORER_TITLE_FIELD } from "./ExplorerTitle";
import { HOST_TITLE_FIELD } from "../host/HostTitle";

export const ExplorerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="Accommodation"
          target="explorerId"
          label="Accommodations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="location" source="location" />
            <TextField label="amenities" source="amenities" />
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Activity"
          target="explorerId"
          label="Activities"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Commission"
          target="explorerId"
          label="Commissions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="explorer"
              source="explorer.id"
              reference="Explorer"
            >
              <TextField source={EXPLORER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

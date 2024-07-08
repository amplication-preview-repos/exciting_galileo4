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

import { TRAVELER_TITLE_FIELD } from "../traveler/TravelerTitle";
import { ACCOMMODATION_TITLE_FIELD } from "./AccommodationTitle";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";
import { EXPLORER_TITLE_FIELD } from "../explorer/ExplorerTitle";
import { HOST_TITLE_FIELD } from "../host/HostTitle";

export const AccommodationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Booking"
          target="accommodationId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="traveler"
              source="traveler.id"
              reference="Traveler"
            >
              <TextField source={TRAVELER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="accommodation"
              source="accommodation.id"
              reference="Accommodation"
            >
              <TextField source={ACCOMMODATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="activity"
              source="activity.id"
              reference="Activity"
            >
              <TextField source={ACTIVITY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

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

import { TRAVELER_TITLE_FIELD } from "./TravelerTitle";
import { ACCOMMODATION_TITLE_FIELD } from "../accommodation/AccommodationTitle";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";

export const TravelerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <ReferenceManyField
          reference="Booking"
          target="travelerId"
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

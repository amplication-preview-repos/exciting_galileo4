import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TRAVELER_TITLE_FIELD } from "../traveler/TravelerTitle";
import { ACCOMMODATION_TITLE_FIELD } from "../accommodation/AccommodationTitle";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

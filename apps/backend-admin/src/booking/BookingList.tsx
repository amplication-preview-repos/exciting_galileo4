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
import { TRAVELER_TITLE_FIELD } from "../traveler/TravelerTitle";
import { ACCOMMODATION_TITLE_FIELD } from "../accommodation/AccommodationTitle";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

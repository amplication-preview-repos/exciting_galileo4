import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TravelerTitle } from "../traveler/TravelerTitle";
import { AccommodationTitle } from "../accommodation/AccommodationTitle";
import { ActivityTitle } from "../activity/ActivityTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="traveler.id"
          reference="Traveler"
          label="traveler"
        >
          <SelectInput optionText={TravelerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="accommodation.id"
          reference="Accommodation"
          label="accommodation"
        >
          <SelectInput optionText={AccommodationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="activity.id"
          reference="Activity"
          label="activity"
        >
          <SelectInput optionText={ActivityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExplorerTitle } from "../explorer/ExplorerTitle";
import { HostTitle } from "../host/HostTitle";
import { BookingTitle } from "../booking/BookingTitle";

export const AccommodationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="location" source="location" />
        <TextInput label="amenities" multiline source="amenities" />
        <ReferenceInput
          source="explorer.id"
          reference="Explorer"
          label="explorer"
        >
          <SelectInput optionText={ExplorerTitle} />
        </ReferenceInput>
        <ReferenceInput source="host.id" reference="Host" label="host">
          <SelectInput optionText={HostTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

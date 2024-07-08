import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExplorerTitle } from "../explorer/ExplorerTitle";
import { HostTitle } from "../host/HostTitle";
import { BookingTitle } from "../booking/BookingTitle";

export const AccommodationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccommodationTitle } from "../accommodation/AccommodationTitle";
import { ActivityTitle } from "../activity/ActivityTitle";
import { CommissionTitle } from "../commission/CommissionTitle";

export const ExplorerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="accommodations"
          reference="Accommodation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccommodationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="activities"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="commissions"
          reference="Commission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommissionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

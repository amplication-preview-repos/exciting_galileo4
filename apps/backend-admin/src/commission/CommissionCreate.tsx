import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExplorerTitle } from "../explorer/ExplorerTitle";

export const CommissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="explorer.id"
          reference="Explorer"
          label="explorer"
        >
          <SelectInput optionText={ExplorerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

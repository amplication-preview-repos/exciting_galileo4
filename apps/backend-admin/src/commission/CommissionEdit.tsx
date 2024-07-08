import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExplorerTitle } from "../explorer/ExplorerTitle";

export const CommissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

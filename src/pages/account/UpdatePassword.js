import React from "react";
import { Main, Card, FormInput, FormButton } from "../../components";

function UpdatePassword() {
  return (
    <Main title="Update Password">
      <Card>
        <FormInput
          label="Current Password"
          name="current_password"
          id="current_password"
          type="password"
        />
        <FormInput
          label="New Password"
          name="password"
          id="password"
          type="password"
        />
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          id="confirm_password"
          type="password"
        />
        <FormButton label="Simpan Perubahan" type="submit" />
      </Card>
    </Main>
  );
}

export default UpdatePassword;

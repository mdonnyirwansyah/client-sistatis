import React from "react";
import { Main, Card, Input } from "../../components";

function UpdatePassword() {
  return (
    <Main title="Update Password">
      <Card>
        <Input
          label="Current Password"
          name="current_password"
          id="current_password"
          type="password"
        />
        <Input
          label="New Password"
          name="password"
          id="password"
          type="password"
        />
        <Input
          label="Confirm Password"
          name="confirm_password"
          id="confirm_password"
          type="password"
        />
        <Input label="Simpan Perubahan" type="button" />
      </Card>
    </Main>
  );
}

export default UpdatePassword;

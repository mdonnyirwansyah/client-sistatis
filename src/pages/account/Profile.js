import React from "react";
import { Main, Card, FormInput, FormButton } from "../../components";

function Profile() {
  return (
    <Main title="Profil">
      <Card>
        <FormInput label="Email" name="email" id="email" type="email" />
        <FormInput label="Nama" name="name" id="name" type="text" />
        <FormButton label="Simpan Perubahan" type="submit" />
      </Card>
    </Main>
  );
}

export default Profile;

import React from "react";
import { Main, Card, Input } from "../../components";

function Profile() {
  return (
    <Main title="Profil">
      <Card>
        <Input label="Email" name="email" id="email" type="email" />
        <Input label="Nama" name="name" id="name" type="text" />
        <Input label="Simpan Perubahan" type="button" />
      </Card>
    </Main>
  );
}

export default Profile;

import React from "react";
import { Main, Card, FormProfile } from "../../components";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Main title="Profil">
      <Card>
        <FormProfile data={user} />
      </Card>
    </Main>
  );
}

export default Profile;

import React from 'react';
import { Main, Card } from '../../../components';
import { FormProfile } from './components';
import { useGetMe } from '../../../hooks/useAuths';

function Profile() {
    const { data } = useGetMe();

    return (
        <Main title="Profil">
            <Card>
                <FormProfile data={data} />
            </Card>
        </Main>
    );
}

export default Profile;

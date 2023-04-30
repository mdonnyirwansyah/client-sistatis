import { Main, Card } from '../../../components';
import { FormPasswordUpdate } from './components';

function UpdatePassword() {
    return (
        <Main title="Update Password">
            <Card>
                <FormPasswordUpdate />
            </Card>
        </Main>
    );
}

export default UpdatePassword;

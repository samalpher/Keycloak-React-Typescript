import React from 'react';
import {useKeycloak} from "@react-keycloak/web";

const ProtectedPage: React.FC = () => {
    const [keycloak] = useKeycloak();

    const handleLogout = () => {
        keycloak.logout();
    };
    console.log('in protected');
    return (
        <div>
            <div>
                <h6>This is my protected page.  There are many like it but this one is mine.</h6>
            </div>
            <div>
                <button type={'button'} onClick={handleLogout}>logout</button>
            </div>
        </div>
    )
};

export default ProtectedPage;

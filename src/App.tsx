import React from 'react';
import './App.css';
import Keycloak, {KeycloakInitOptions} from 'keycloak-js'
import {KeycloakEvent, KeycloakProvider, KeycloakTokens} from "@react-keycloak/web";
import {AppRouter} from "./routes";

const App: React.FC = () => {

  const keycloak = Keycloak({
    clientId: '<client id>',
    realm: '<realm name>',
    url: 'https://keycloak-url/auth/'
  });

  const keycloakProviderInitConfig: KeycloakInitOptions = {
    onLoad: 'check-sso',
    promiseType: 'native'
  };

  const onKeycloakEvent = (event: KeycloakEvent) => {
    console.log('onKeycloakEvent', event);
  };

  const onKeycloakTokens = (tokens: KeycloakTokens) => {
    console.log('onKeycloakTokens', tokens);
  };

  return (
    <KeycloakProvider
        keycloak={keycloak}
        initConfig={keycloakProviderInitConfig}
        onEvent={onKeycloakEvent}
        onTokens={onKeycloakTokens}
    >
      <AppRouter />
    </KeycloakProvider>
  );
};

export default App;

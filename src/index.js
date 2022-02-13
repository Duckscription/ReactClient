import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./custom.scss";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(<React.StrictMode>
    <Auth0Provider
      domain={process.env.DOMAIN}
      clientId={process.env.CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>, document.getElementById("root"));

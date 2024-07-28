import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import AppRouter from "./RouterProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin + "/home" }}
  >
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Auth0Provider>
);

reportWebVitals();

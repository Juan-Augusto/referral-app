import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { spec } from "../../constants/swaggerSpec";
import { Layout } from "../../components/layout";

const ApiDocumentation = () => {
  return (
    <Layout>
      <SwaggerUI
        url="https://referral-app-backend.onrender.com/api-docs/swagger.json"
        spec={spec}
      />
    </Layout>
  );
};

export default ApiDocumentation;

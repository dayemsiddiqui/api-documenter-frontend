import { useState } from "react";
import { RedocStandalone } from "redoc-asyncapi";

export const APIDocumentViewer: React.FC<{ id: string }> = ({ id }) => {
  const [url, setUrl] = useState("http://petstore.swagger.io/v2/swagger.json");
  return <RedocStandalone specUrl={url} />;
};

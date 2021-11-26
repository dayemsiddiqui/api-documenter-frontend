import { useState } from "react";
import { Link } from "react-router-dom";

export const UploadedAPIDocsList: React.FC<{}> = () => {
  const [docs, setDocs] = useState<{ name: string; id: string }[]>([
    {
      name: "insights-core",
      id: "1",
    },
    {
      name: "tp-core",
      id: "2",
    },
    {
      name: "insights-core",
      id: "3",
    },
  ]);
  return (
    <ul>
      {docs.map((doc) => {
        return (
          <li className="text-brand-blue underline">
            <Link to={`/render/${doc.id}`}>{doc.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

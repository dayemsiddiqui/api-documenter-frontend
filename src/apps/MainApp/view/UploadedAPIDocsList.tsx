import { useState } from "react";

export const UploadedAPIDocsList: React.FC<{}> = () => {
  const [docs, setDocs] = useState<{ name: string; link: string }[]>([
    {
      name: "insights-core",
      link: "http://www.google.com",
    },
    {
      name: "tp-core",
      link: "http://www.google.com",
    },
    {
      name: "insights-core",
      link: "http://www.google.com",
    },
  ]);
  return (
    <ul>
      {docs.map((doc) => {
        return (
          <li>
            <a href={doc.link} className="text-brand-blue underline">
              {doc.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

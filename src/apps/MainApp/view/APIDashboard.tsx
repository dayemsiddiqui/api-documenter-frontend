import React, { useState } from "react";
import { Dropzone, FileItem, FileValidated } from "@dropzone-ui/react";
import { UploadedAPIDocsList } from "./UploadedAPIDocsList";

export const APIDashboard: React.FC<{}> = () => {
  const [files, setFiles] = useState<FileValidated[]>([]);
  const updateFiles = (incomingFiles: FileValidated[]) => {
    setFiles(incomingFiles);
  };
  return (
    <>
      <Dropzone onChange={updateFiles} value={files}>
        {files.map((file) => (
          <FileItem {...file} preview />
        ))}
      </Dropzone>
      <UploadedAPIDocsList />
    </>
  );
};

import React from "react";
import PageTitle from "../../../../lib/components/Typography/PageTitle";
import { InputWithButton } from "../../../../lib/components/Forms/InputWithButton";
import { DataTable } from "../../../../lib/components/DataTable";
import { TableCell } from "@windmill/react-ui";
import { useAnalyseVideo } from "../infra/useAnalyseVideo";
import { Button } from "../../../../lib/components/Buttons/Button";

export const AnalyseVideo: React.FC<{}> = ({}) => {
  const { analyse, isLoading, isSuccess } = useAnalyseVideo();
  return (
    <>
      <PageTitle>Video Analysis</PageTitle>
      <InputWithButton
        buttonLabel="Analyse Video"
        placeholder="https://www.youtube.com/watch?v=fbEubYDGLYY"
        inputLabel="Video URL:"
        onSubmit={(data) => analyse(data.videoID)}
      />
      <div className="py-16">
        <h3 className="my-6 text-lg font-semibold text-gray-700 dark:text-gray-200">
          My Jobs
        </h3>
        <DataTable
          data={[
            {
              jobID: "asdasd",
              status: "pending",
              meta: {
                videoID: "someVideoID",
                videoTitle: "videoName",
                channelName: "channelName",
                channelID: "channelID",
              },
            },
          ]}
          config={{
            columns: [
              {
                columnLabel: "JobID",
                render: (job) => <TableCell>{job.jobID}</TableCell>,
              },
              {
                columnLabel: "Video Name",
                render: (job) => <TableCell> {job.meta.videoTitle} </TableCell>,
              },
              {
                columnLabel: "Channel Name",
                render: (job) => (
                  <TableCell> {job.meta.channelName} </TableCell>
                ),
              },
              {
                columnLabel: "Status",
                render: (job) => <TableCell> {job.status} </TableCell>,
              },
              {
                columnLabel: "Action",
                render: () => (
                  <TableCell>
                    <Button className="w-0" onClick={() => {}}>
                      View Results
                    </Button>
                  </TableCell>
                ),
              },
            ],
          }}
        />
      </div>
    </>
  );
};

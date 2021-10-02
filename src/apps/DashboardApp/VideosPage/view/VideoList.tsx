import React from "react";
import PageTitle from "../../../../lib/components/Typography/PageTitle";
import { DataTable } from "../../../../lib/components/DataTable";
import { TableCell } from "@windmill/react-ui";
import { AvatarWithName } from "../../../../lib/components/AvatarWithName";
import ChannelIcon from "../../../../assets/img/channel-icon.png";
import { useVideos } from "../infra/useVideos";
import { Loader } from "../../../../lib/components/Loader";
import { Button } from "../../../../lib/components/Buttons/Button";

export const VideoList: React.FC<{}> = () => {
  const { videos, isLoading } = useVideos();
  return (
    <Loader isLoading={isLoading}>
      <>
        <PageTitle>My Videos</PageTitle>
        <DataTable
          data={videos}
          config={{
            columns: [
              {
                columnLabel: "Title",
                render: () => (
                  <TableCell>
                    <AvatarWithName
                      name="productivity tips"
                      ImageIcon={ChannelIcon}
                    />
                  </TableCell>
                ),
              },
              {
                columnLabel: "Channel Name",
                render: (video) => (
                  <TableCell> {video.channel.name} </TableCell>
                ),
              },
              {
                columnLabel: "Likes",
                render: (video) => <TableCell> {video.likes} </TableCell>,
              },
              {
                columnLabel: "Dislikes",
                render: (video) => <TableCell> {video.dislikes} </TableCell>,
              },
              {
                columnLabel: "Action",
                render: () => (
                  <TableCell>
                    <Button onClick={() => {}}> Analyse </Button>{" "}
                  </TableCell>
                ),
              },
            ],
          }}
        />
      </>
    </Loader>
  );
};

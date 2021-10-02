import React from "react";
import PageTitle from "../../../../lib/components/Typography/PageTitle";
import { DataTable } from "../../../../lib/components/DataTable";
import { Button, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../../../assets/img/channel-icon.png";
import { AvatarWithName } from "../../../../lib/components/AvatarWithName/view/AvatarWithName";
import { useSpam } from "../infra/useSpam";
import { Loader } from "../../../../lib/components/Loader";

const Spam: React.FC<{}> = () => {
  const { spam, isLoading } = useSpam();

  const TextCell = (text: string | number) => (
    <TableCell className="max-w-xl">
      <div className="truncate">
        <div className="truncate">{text}</div>
      </div>
    </TableCell>
  );
  return (
    <>
      <PageTitle>Spam</PageTitle>
      <Loader isLoading={isLoading}>
        <DataTable
          data={spam}
          config={{
            columns: [
              {
                columnLabel: "Username",
                render: (comment) => (
                  <TableCell>
                    <AvatarWithName
                      name="dayemsiddiqui"
                      ImageIcon={ChannelIcon}
                    />
                  </TableCell>
                ),
              },
              {
                columnLabel: "Comment",
                render: (comment) => TextCell(comment.text),
              },
              {
                columnLabel: "Likes",
                render: (comment) => TextCell(comment.likes),
              },
              {
                columnLabel: "Dislikes",
                render: (comment) => TextCell(comment.dislikes),
              },

              {
                columnLabel: "Actions",
                render: () => (
                  <TableCell className="flex flex-row gap-2">
                    <Button size="small">Detailed View </Button>
                    <Button size="small">Delete </Button>
                    <Button size="small"> Not Spam </Button>
                  </TableCell>
                ),
              },
            ],
          }}
        />
      </Loader>
    </>
  );
};

export default Spam;

import PageTitle from "../../../../lib/components/Typography/PageTitle";
import React from "react";
import { Button, TableCell } from "@windmill/react-ui";
import { DataTable } from "../../../../lib/components/DataTable";
import { AvatarWithName } from "../../../../lib/components/AvatarWithName";
import ChannelIcon from "../../../../assets/img/channel-icon.png";

export const Feedback: React.FC<{}> = () => {
  const TextCell = (text: string) => (
    <TableCell className="max-w-xl">
      <div className="truncate">
        <div className="truncate">{text}</div>
      </div>
    </TableCell>
  );
  return (
    <>
      <PageTitle>Feedback/Suggestions</PageTitle>
      <DataTable
        data={[{}]}
        config={{
          columns: [
            {
              columnLabel: "Username",
              render: () => (
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
              render: () =>
                TextCell(
                  "Hi This is a very mean comment. Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment"
                ),
            },
            {
              columnLabel: "Actions",
              render: () => (
                <TableCell className="flex flex-row gap-2">
                  <Button size="small">Detailed View </Button>
                  <Button size="small">Mark As Read </Button>
                </TableCell>
              ),
            },
          ],
        }}
      />
    </>
  );
};

export default Feedback;

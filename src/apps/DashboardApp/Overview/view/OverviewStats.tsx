import InfoCard from "../../../../lib/components/Cards/InfoCard";
import RoundIcon from "../../../../lib/components/RoundIcon";
import {
  ChatIcon,
  HeartIcon,
  SpamIcon,
  ThumbsDownIcon,
} from "../../../../assets/icons";
import React from "react";

export const OverviewStats: React.FC<{}> = () => {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <InfoCard title="Spam" value="6389">
        <RoundIcon
          icon={SpamIcon}
          iconColorClass="text-orange-500 dark:text-orange-100"
          bgColorClass="bg-orange-100 dark:bg-orange-500"
          className="mr-4"
        />
      </InfoCard>

      <InfoCard title="Positive Comments" value="529">
        <RoundIcon
          icon={HeartIcon}
          iconColorClass="text-red-500 dark:text-red-100"
          bgColorClass="bg-red-100 dark:bg-red-500"
          className="mr-4"
        />
      </InfoCard>

      <InfoCard title="Negative Comments" value="376">
        <RoundIcon
          icon={ThumbsDownIcon}
          iconColorClass="text-yellow-500 dark:text-yellow-100"
          bgColorClass="bg-yellow-100 dark:bg-yellow-500"
          className="mr-4"
        />
      </InfoCard>

      <InfoCard title="Suggestions/Feedback" value="35">
        <RoundIcon
          icon={ChatIcon}
          iconColorClass="text-teal-500 dark:text-teal-100"
          bgColorClass="bg-teal-100 dark:bg-teal-500"
          className="mr-4"
        />
      </InfoCard>
    </div>
  );
};

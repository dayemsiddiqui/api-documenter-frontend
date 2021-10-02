import React from "react";
import { Avatar } from "@windmill/react-ui";

export const AvatarWithName: React.FC<{
  name: string;
  subtitle?: string;
  ImageIcon: any;
}> = ({ name, subtitle, ImageIcon }) => {
  return (
    <div className="flex items-center text-sm">
      <Avatar
        className="hidden mr-3 md:block"
        src={ImageIcon}
        alt="User image"
      />
      <div>
        <p className="font-semibold">{name}</p>
        {subtitle && (
          <p className="text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

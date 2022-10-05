import React from "react";

interface Props {
  /**
   * Title of the badge
   */
  title: string;

  /**
   * Subtitle of the badge
   */
  subtitle?: string;
}

export const AlertBadge: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="bg-dark-red flex flex-col items-center py-4">
      <p className="text-2xl font-bold text-white">{title}</p>
      <p className="text-xl text-white">{subtitle}</p>
    </div>
  );
};

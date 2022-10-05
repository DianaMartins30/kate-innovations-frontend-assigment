import React from "react";

interface Props {
  /**
   * Boolean that specifies if is red or not
   */
  isCallForAction?: boolean;

  /**
   * Content presented in the button
   */
  children: string;

  /**
   * Callback: Function triggered by the click on the button
   */
  onClickCallback?: () => void;
}

export const Button: React.FC<Props> = ({
  isCallForAction,
  children,
  onClickCallback,
}) => {
  return (
    <button
      className={`${
        isCallForAction
          ? "bg-dark-red hover:bg-light-red"
          : "bg-grey hover:bg-dark-grey"
      }
             text-white font-bold py-2 px-4 rounded-full shadow pointer w-52`}
      onClick={onClickCallback}
    >
      {children}
    </button>
  );
};

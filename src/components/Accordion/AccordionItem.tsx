import React from "react";

interface Props {
  /**
   * Question presented on the accordion
   */
  question: string;

  /**
   * Response presented on the accordion
   */
  children: string;

  /**
   * Callback: Function triggered by click
   */
  onClickCallback: () => void;

  /**
   * Set's the accordion open or closed
   */
  isOpen: boolean;
}

export const AccordionItem: React.FC<Props> = ({
  question,
  children,
  isOpen,
  onClickCallback,
}) => {
  return (
    <>
      <div
        className={`flex justify-between items-center cursor-pointer p-2 ${
          isOpen ? "" : "border-b"
        }`}
        onClick={onClickCallback}
      >
        <p className="font-bold">{question}</p>

        <p className="p-4">{isOpen ? "-" : "+"}</p>
      </div>
      <div className={`px-2 pb-2 ${isOpen ? "border-b" : "hidden"}`}>
        <p>{children}</p>
      </div>
    </>
  );
};

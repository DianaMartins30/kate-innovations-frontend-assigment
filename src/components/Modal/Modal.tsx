import React from "react";
import { AlertBadge } from "components/AlertBadge/AlertBadge";
import { Button } from "components/Button/Button";
import { useAxios } from "hooks/useAxios";

interface Props {
  /**
   * The title of the modal, presented in the banner
   */
  title: string;

  /**
   * Boolean tha opens and closes the modal
   */
  isModalOpen: boolean;

  /**
   * Callback: Function that closes the modal
   */
  onClickCloseButton?: () => void;
}

export const Modal: React.FC<Props> = ({
  title,
  isModalOpen,
  onClickCloseButton,
}) => {
  const [data, error, request] = useAxios({
    method: "GET",
    url: "http://localhost:4000/products",
  });

  return (
    <>
      {isModalOpen ? (
        <div className=" flex overflow-x-hidden bg-white/[.8] overflow-y-auto fixed inset-0 z-50">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <AlertBadge title={title}></AlertBadge>
              {data instanceof Array &&
                data.map(({ name, description, price, image }, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center py-6 ${
                      index !== data.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <img className="w-58 h-40 mb-6" src={image} />
                    <p className="text-md font-bold text-dark-red">{name}</p>
                    <p className="text-sm py-2">{description}</p>
                    <p className="font-bold">€ {price}</p>
                  </div>
                ))}
              <div className="flex items-center justify-center mb-4">
                <Button isCallForAction onClickCallback={onClickCloseButton}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

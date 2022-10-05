import "./app.scss";
import React, { useState } from "react";
import { AlertBadge } from "components/AlertBadge/AlertBadge";
import { Button } from "components/Button/Button";
import { Accordion } from "components/Accordion/Accordion";
import { Modal } from "components/Modal/Modal";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AlertBadge title="Red Alert" subtitle="by Warning" />
      <div className="bg-light-grey grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center p-10 md:p-20">
        <img
          src="/public/products/product-1-transparent.png"
          className="object-contain p-4 md:p-8 hidden lg:block"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-dark-grey md:pb-12 flex flex-col items-center">
            <p className="text-xl lg:text-3xl font-bold text-dark-grey">
              Protect your home
            </p>
            <p className="text-xl lg:text-3xl text-dark-grey">
              for criminally a low price
            </p>
          </div>
          <img
            src="/public/products/product-2-transparent.png"
            className="object-contain py-8
             block lg:hidden"
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-2">
            <Button isCallForAction>Get started for €59,90</Button>
            <Button onClickCallback={() => setIsModalOpen(true)}>
              More Information
            </Button>
          </div>
        </div>
        <img
          src="/public/products/product-2-transparent.png"
          className="object-contain p-4 md:p-8 hidden lg:block"
        />
      </div>
      <div className="flex flex-col items-center mt-4 md:mb-4 md:p-12">
        <Accordion title="Most asked questions" />
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClickCloseButton={() => setIsModalOpen(false)}
        title="More information"
      />
    </>
  );
};

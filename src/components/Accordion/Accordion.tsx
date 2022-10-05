import React, { useState } from "react";
import { AccordionItem } from "components/Accordion/AccordionItem";
import { useAxios } from "hooks/useAxios";

interface Props {
  /**
   * Title of the accordion
   */
  title?: string;

  /**
   * Accordion items
   */
  children?: string;
}

export const Accordion: React.FC<Props> = ({ title, children }) => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggle = (index) => {
    if (accordionOpen === index) return setAccordionOpen(null);
    setAccordionOpen(index);
  };
  const [data, error, request] = useAxios({
    method: "GET",
    url: "http://localhost:4000/faqs",
  });

  return (
    <>
      {data ? (
        <>
          <p className="text-xl md:text-3xl font-bold text-dark-grey mb-4 md:mb-8">
            {title}
          </p>
          <div className="border-t md:border-x border-dark-grey w-full lg:w-1/3 md:rounded-md">
            {data instanceof Array &&
              data.map(({ question, answer }, index) => (
                <AccordionItem
                  question={question}
                  isOpen={accordionOpen === index ? true : false}
                  onClickCallback={() => toggle(index)}
                  children={answer}
                  key={index}
                />
              ))}
          </div>
        </>
      ) : null}
    </>
  );
};

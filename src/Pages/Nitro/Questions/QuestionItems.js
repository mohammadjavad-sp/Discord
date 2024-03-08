import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
const QuestionItems = ({ data }) => {
  return (
    <>
      <Accordion
        collapseAll
        className="!mb-3 !py-3 !rounded-xl bg-[#F3F4F6]  !border-0 !outline-0"
      >
        <AccordionPanel className="focus:!ring-0 !ring-0">
          <AccordionTitle className="focus:!ring-0 !ring-0 !text-[22px]">
            {data.header}
          </AccordionTitle>
          <AccordionContent className="!border-0">
            <p className="mb-2 text-gray-500 text-[18px] dark:text-gray-400">
              {data.content}
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </>
  );
};

export default QuestionItems;

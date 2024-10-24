import React, { useState } from 'react';
import CustomAccordion from './CustomAccordion';

interface AccordionDataProps {
  title: string;
  content: string;
}

export interface CustomAccordionContainerProps {
  data: AccordionDataProps[];
  marginBottom?: number;
  borderColor?: string;
  borderRadius?: number;
  summaryBgColor?: string;
  summaryTextColor?: string;
  detailsBgColor?: string;
  expandIcon?: React.ReactNode;
}

const CustomAccordionContainer: React.FC<CustomAccordionContainerProps> = ({
  data,
  marginBottom,
  borderColor,
  borderRadius,
  summaryBgColor,
  summaryTextColor,
  detailsBgColor,
  expandIcon,
}) => {
  const [expanded, setExpanded] = useState<number>(-1);

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <CustomAccordion
            key={index}
            title={item.title}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            marginBottom={marginBottom}
            borderColor={borderColor}
            borderRadius={borderRadius}
            summaryBgColor={summaryBgColor}
            summaryTextColor={summaryTextColor}
            detailsBgColor={detailsBgColor}
            expandIcon={expandIcon}
          >
            {item.content}
          </CustomAccordion>
        ))}
    </>
  );
};

export default CustomAccordionContainer;
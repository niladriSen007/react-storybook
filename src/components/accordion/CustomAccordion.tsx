import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

interface CustomAccordionProps extends AccordionProps {
  title: string;
  index: number;
  expanded: number;
  setExpanded: (index: number) => void;
  marginBottom?: number;
  borderColor?: string;
  borderRadius?: number;
  summaryBgColor?: string;
  summaryTextColor?: string;
  detailsBgColor?: string;
  expandIcon?: React.ReactNode;
}

const StyledAccordion = styled(Accordion)<CustomAccordionProps>(({ theme, marginBottom, borderColor, borderRadius }) => ({
  marginBottom: theme.spacing(marginBottom || 2),
  border: `1px solid ${borderColor || theme.palette.divider}`,
  borderRadius: borderRadius || theme.shape.borderRadius,
}));

const StyledAccordionSummary = styled(AccordionSummary)<CustomAccordionProps>(({ theme, summaryBgColor, summaryTextColor }) => ({
  backgroundColor: summaryBgColor || theme.palette.primary.main,
  color: summaryTextColor || theme.palette.primary.contrastText,
}));

const StyledAccordionDetails = styled(AccordionDetails)<CustomAccordionProps>(({ theme, detailsBgColor }) => ({
  backgroundColor: detailsBgColor || theme.palette.background.paper,
}));

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  children,
  index,
  expanded,
  setExpanded,
  marginBottom,
  borderColor,
  borderRadius,
  summaryBgColor,
  summaryTextColor,
  detailsBgColor,
  expandIcon,
  ...props
}) => {
  const isExpanded: boolean = expanded === index;

  const handleChange = () => {
    setExpanded(isExpanded ? -1 : index);
  };

  return (
    <StyledAccordion
      expanded={isExpanded}
      onChange={handleChange}
      marginBottom={marginBottom}
      borderColor={borderColor}
      borderRadius={borderRadius}
      {...props}
    >
      <StyledAccordionSummary
        expandIcon={expandIcon || <ExpandMoreIcon />}
        summaryBgColor={summaryBgColor}
        summaryTextColor={summaryTextColor}
      >
        {title}
      </StyledAccordionSummary>
      <StyledAccordionDetails detailsBgColor={detailsBgColor}>
        {children}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
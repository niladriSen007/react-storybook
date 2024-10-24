// src/components/CustomPagination.tsx

import React, { useState } from 'react';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface CustomPaginationProps extends PaginationProps {
  marginTop?: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  leftArrowIcon?: React.ReactNode;
  rightArrowIcon?: React.ReactNode;
  position?: 'left' | 'center' | 'right';
}

const StyledPagination = styled(Pagination)<CustomPaginationProps>(({ theme, marginTop, color, backgroundColor, borderRadius, position }) => ({
  marginTop: theme.spacing(marginTop || 2),
  color: color || theme.palette.text.primary,
  backgroundColor: backgroundColor || theme.palette.background.paper,
  borderRadius: borderRadius || theme.shape.borderRadius,
  display: 'flex',
  justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
}));

const CustomPagination: React.FC<CustomPaginationProps> = ({
  leftArrowIcon,
  rightArrowIcon,
  position,
  ...props
}) => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (props.onChange) {
      props.onChange(event, value);
    }
  };

  return (
    <StyledPagination
      {...props}
      page={page}
      onChange={handleChange}
      position={position}
      renderItem={(item) => (
        <PaginationItem
          components={{
            previous: leftArrowIcon || ArrowBackIcon,
            next: rightArrowIcon || ArrowForwardIcon,
          }}
          {...item}
        />
      )}
    />
  );
};

export default CustomPagination;
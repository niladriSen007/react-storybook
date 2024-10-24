// src/stories/CustomPagination.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomPagination, { CustomPaginationProps } from '../components/pagination/CustomPagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default {
  title: 'Components/CustomPagination',
  component: CustomPagination,
  argTypes: {
    count: { control: 'number' },
    page: { control: 'number' },
    onChange: { action: 'page changed' },
    marginTop: { control: 'number' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'number' },
    leftArrowIcon: { control: 'element' },
    rightArrowIcon: { control: 'element' },
    position: { control: 'radio', options: ['left', 'center', 'right'] },
  },
} as Meta;

const Template: Story<CustomPaginationProps> = (args) => <CustomPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
  page: 1,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  count: 10,
  page: 1,
  marginTop: 4,
  color: 'white',
  backgroundColor: 'blue',
  borderRadius: 8,
};

export const LargePagination = Template.bind({});
LargePagination.args = {
  count: 20,
  page: 1,
  size: 'large',
};

export const SmallPagination = Template.bind({});
SmallPagination.args = {
  count: 5,
  page: 1,
  size: 'small',
};

export const DisabledPagination = Template.bind({});
DisabledPagination.args = {
  count: 10,
  page: 1,
  disabled: true,
};

export const CustomArrowIcons = Template.bind({});
CustomArrowIcons.args = {
  count: 10,
  page: 1,
  leftArrowIcon: ChevronLeftIcon ,
  rightArrowIcon: ChevronRightIcon ,
};

export const NoArrows = Template.bind({});
NoArrows.args = {
  count: 10,
  page: 1,
  hidePrevButton: true,
  hideNextButton: true,
};

export const PositionedLeft = Template.bind({});
PositionedLeft.args = {
  count: 10,
  page: 1,
  position: 'left',
};

export const PositionedCenter = Template.bind({});
PositionedCenter.args = {
  count: 10,
  page: 1,
  position: 'center',
};

export const PositionedRight = Template.bind({});
PositionedRight.args = {
  count: 10,
  page: 1,
  position: 'right',
};
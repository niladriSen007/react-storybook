import React from 'react';
import { Meta, Story } from '@storybook/react';
import DynamicTabs from '../components/tab/DynamicTabs';


export default {
  title: 'Components/DynamicTabs',
  component: DynamicTabs,
  argTypes: {
    indicatorColor: { control: 'radio', options: ['primary', 'secondary'] },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    variant: { control: 'radio', options: ['standard', 'scrollable', 'fullWidth'] },
    tabStyles: { control: 'object' },
    contentStyles: { control: 'object' },
  },
} as Meta;

const Template: Story<DynamicTabsProps> = (args) => <DynamicTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ],
};

export const CustomIndicatorColor = Template.bind({});
CustomIndicatorColor.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ],
  indicatorColor: 'secondary',
};

export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ],
  orientation: 'vertical',
  tabStyles: { borderRight: '1px solid #ccc' },
  contentStyles: { padding: '16px' },
};

export const ScrollableVariant = Template.bind({});
ScrollableVariant.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
    { label: 'Tab 4', content: 'Content for Tab 4' },
    { label: 'Tab 5', content: 'Content for Tab 5' },
    { label: 'Tab 6', content: 'Content for Tab 6' },
  ],
  variant: 'scrollable',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ],
  tabStyles: { backgroundColor: '#f0f0f0', color: '#333' },
  contentStyles: { padding: '16px', backgroundColor: '#fafafa' },
};
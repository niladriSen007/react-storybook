import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomStepper from '../components/stepper/CustomStepper';


export default {
  title: 'Components/CustomStepper',
  component: CustomStepper,
} as ComponentMeta<typeof CustomStepper>;

const Template: ComponentStory<typeof CustomStepper> = (args) => <CustomStepper {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  steps: [
    { label: 'Step 1', content: <div>Content for Step 1</div> },
    { label: 'Step 2', content: <div>Content for Step 2</div> },
    { label: 'Step 3', content: <div>Content for Step 3</div> },
  ],
  orientation: 'horizontal',
  backgroundColor: '#f0f0f0',
  textColor: '#333',
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps: [
    { label: 'Step 1', content: <div>Content for Step 1</div> },
    { label: 'Step 2', content: <div>Content for Step 2</div> },
    { label: 'Step 3', content: <div>Content for Step 3</div> },
  ],
  orientation: 'vertical',
  backgroundColor: '#f0f0f0',
  textColor: '#333',
};
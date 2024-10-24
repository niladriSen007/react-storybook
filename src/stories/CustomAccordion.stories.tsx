import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Meta, Story } from '@storybook/react';
import CustomAccordionContainer, { CustomAccordionContainerProps } from '../components/accordion/CustomAccordionContainer';


export default {
  title: 'Components/CustomAccordionContainer',
  component: CustomAccordionContainer,
} as Meta;

const Template: Story<CustomAccordionContainerProps> = (args) => <CustomAccordionContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: 'Accordion 1',
      content: 'Content for Accordion 1',
    },
    {
      title: 'Accordion 2',
      content: 'Content for Accordion 2',
    },
    {
      title: 'Accordion 3',
      content: 'Content for Accordion 3',
    },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  data: [
    {
      title: 'Styled Accordion 1',
      content: 'Content for Styled Accordion 1',
    },
    {
      title: 'Styled Accordion 2',
      content: 'Content for Styled Accordion 2',
    },
    {
      title: 'Styled Accordion 3',
      content: 'Content for Styled Accordion 3',
    },
  ],
  marginBottom: 4,
  borderColor: 'blue',
  borderRadius: 8,
  summaryBgColor: 'lightblue',
  summaryTextColor: 'darkblue',
  detailsBgColor: 'lightgray',
};

export const CustomExpandIcon = Template.bind({});
CustomExpandIcon.args = {
  data: [
    {
      title: 'Accordion with Custom Icon 1',
      content: 'Content for Accordion with Custom Icon 1',
    },
    {
      title: 'Accordion with Custom Icon 2',
      content: 'Content for Accordion with Custom Icon 2',
    },
    {
      title: 'Accordion with Custom Icon 3',
      content: 'Content for Accordion with Custom Icon 3',
    },
  ],
  expandIcon: <ArrowForwardIosIcon />,
};

export const MixedContent = Template.bind({});
MixedContent.args = {
  data: [
    {
      title: 'Accordion with Text',
      content: 'This is a simple text content.',
    },
    {
      title: 'Accordion with List',
      content: (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      ),
    },
    {
      title: 'Accordion with Image',
      content: <img src="https://via.placeholder.com/150" alt="Placeholder" />,
    },
  ],
};

export const NoContent = Template.bind({});
NoContent.args = {
  data: [
    {
      title: 'Accordion 1',
      content: '',
    },
    {
      title: 'Accordion 2',
      content: '',
    },
    {
      title: 'Accordion 3',
      content: '',
    },
  ],
};
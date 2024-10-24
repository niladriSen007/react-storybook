import { ComponentProps } from "react"
import Button from "../components/Button"
import { Meta, StoryObj } from "@storybook/react"
import { fn } from '@storybook/test'

interface StoryProps extends ComponentProps<typeof Button> {
  buttonText: string
}
interface Story extends StoryObj<StoryProps> { }

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    }
  },
  args:{
    onClick : fn()
  }
}

export default meta

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    buttonText: 'Primary Button'
  },
  render: ({ buttonText, ...args }) => <Button {...args}  >{buttonText}</Button>
}
export const secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    buttonText: 'Secondary Button'
  },
  render: ({ buttonText, ...args }) => <Button {...args}  >{buttonText}</Button>
}

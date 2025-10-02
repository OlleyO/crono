import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { AppButton } from './button'

const meta = {
  title: 'Form/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary AppButton',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary AppButton',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Account',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small AppButton',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium AppButton',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large AppButton',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled AppButton',
    disabled: true,
  },
}

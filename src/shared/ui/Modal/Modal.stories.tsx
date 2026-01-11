import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero cum ullam?',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero cum ullam?',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

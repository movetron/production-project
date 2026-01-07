import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button, ButtonSize, ThemeButton } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlinedSizeL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

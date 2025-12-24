import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme): Decorator => {
  return (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};

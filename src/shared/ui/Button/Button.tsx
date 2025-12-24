import React from 'react';
import { classNames } from 'shared/lib/className/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear', //кнопка без всего, просто текст, без рамки, без цвета заднего фона, чтобы сбросить стиль
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  primary?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, theme && cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

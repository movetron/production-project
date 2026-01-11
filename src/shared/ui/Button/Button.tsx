import React from 'react';
import { classNames } from 'shared/lib/className/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear', //кнопка без всего, просто текст, без рамки, без цвета заднего фона, чтобы сбросить стиль
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  primary?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };
  const additional = [cls[theme], cls[size], className];

  return (
    <button type="button" className={classNames(cls.button, mods, additional)} {...otherProps}>
      {children}
    </button>
  );
};

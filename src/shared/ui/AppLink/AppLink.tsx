import React from 'react';
import { classNames } from 'shared/lib/className/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};

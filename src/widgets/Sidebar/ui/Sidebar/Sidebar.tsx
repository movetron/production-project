import { classNames } from 'shared/lib/className/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwicther } from 'widgets/LangSwitcher/ui/LangSwicther';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
  className?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false); //свёрнут или завёрнут сайдбар
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainIcon className={cls.icon} />
            <span className={cls.link}>{t('Главная')}</span>
          </AppLink>
        </div>
        <div className={cls.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{t('О сайте')}</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwicther short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};

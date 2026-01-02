import { classNames } from 'shared/lib/className/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwicther } from 'widgets/LangSwitcher/ui/LangSwicther';
import { useTranslation } from 'react-i18next';

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
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {t('Переключить')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwicther className={cls.lang} />
      </div>
    </div>
  );
};

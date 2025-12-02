import { classNames } from 'shared/lib/className/classNames';
import cls from './LangSwicther.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwictherProps {
  className?: string;
}

export const LangSwicther = ({ className }: LangSwictherProps) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(cls.langSwicther, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toogle}
    >
      {t('Язык')}
    </Button>
  );
};

import { classNames } from 'shared/lib/className/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwictherProps {
  className?: string;
  short?: boolean;
}

export const LangSwicther = ({ className, short }: LangSwictherProps) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button className={classNames('', {}, [className])} theme={ThemeButton.CLEAR} onClick={toogle}>
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};

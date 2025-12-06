import { classNames } from 'shared/lib/className/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

//Компонент для тестирования ErrorBoundary. Кнопка для перехода на страницу с ошибкой
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};

import { type FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface INotFoundPageProps {
    className?: string
}

const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдера')}
        </div>
    )
}

export default NotFoundPage

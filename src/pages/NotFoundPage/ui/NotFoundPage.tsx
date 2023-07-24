import { type FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

interface INotFoundPageProps {
    className?: string
}

const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдера')}
        </Page>
    )
}

export default NotFoundPage

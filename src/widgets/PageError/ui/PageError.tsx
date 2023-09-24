import { type FC } from 'react'
import { classNames } from '@/shared/lib'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui'

interface IPageErrorProps {
    className?: string
}

const PageError: FC<IPageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const onReload = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Произошла непредвиденная ошибка')}
            <Button onClick={onReload}>{t('Перезагрузка')}</Button>
        </div>
    )
}

export default PageError

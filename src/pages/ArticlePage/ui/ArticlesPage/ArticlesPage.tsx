import { memo, type FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'

interface IArticlePageProps {
    className?: string
}

const ArticlesPage: FC<IArticlePageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
        </div>
    )
}

export default memo(ArticlesPage)

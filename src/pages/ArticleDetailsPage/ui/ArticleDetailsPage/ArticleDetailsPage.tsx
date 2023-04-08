import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'

interface IArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ARTICLES DETAILS
        </div>
    )
}

export default memo(ArticleDetailsPage)

import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { EArticleView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface IArticleListProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: EArticleView
}

const getSkeletons = (view: EArticleView) => {
    return new Array(view === EArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ))
}

const ArticleList: FC<IArticleListProps> = memo(({
    className,
    view = EArticleView.SMALL,
    articles,
    isLoading
}) => {
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        )
    }

    const renderArticle = (article: IArticle) => {
        return <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    )
})

export { ArticleList }
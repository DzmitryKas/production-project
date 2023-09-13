import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui'
import { ETextSize } from 'shared/ui/Text/Text'
import { EArticleView } from '../../model/consts/consts'

interface IArticleListProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: EArticleView
    target?: HTMLAttributeAnchorTarget
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
    isLoading,
    target
}) => {
    const { t } = useTranslation()

    const renderArticle = (article: IArticle) => {
        return <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    }

    if (!isLoading && !articles.length) {
        return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <Text
                size={ETextSize.L}
                title={t('Статьи не найдены')}
            />
        </div>
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
})

export { ArticleList }

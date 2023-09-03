import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticlesInfiniteList.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlePageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { ArticleList } from 'entities/Article'
import { Text } from 'shared/ui'

interface IArticlesInfiniteListProps {
    className?: string
}

const ArticlesInfiniteList: FC<IArticlesInfiniteListProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />
    }

    return (
        <div className={classNames(cls.ArticlesInfiniteList, {}, [className])}>
            <ArticleList
                className={cls.list}
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    )
})

export { ArticlesInfiniteList }

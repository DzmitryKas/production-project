import { type FC, memo, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticleViewSelector, type EArticleView } from 'entities/Article'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlePageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface IArticlePageProps {
    className?: string
}

const reducers: TReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<IArticlePageProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    const onChangeView = useCallback((view: EArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({
            page: 1
        }))
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    )
}

export default memo(ArticlesPage)

import { type FC, memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { classNames, useAppDispatch } from 'shared/lib'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { ETextSize, Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationSlice'
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticlerecommendations'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from 'shared/ui/Stack'

interface IArticleDetailsPageProps {
    className?: string
}

const reducers: TReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text size={ETextSize.L} className={cls.commentTitle} title={t('Рекомендуем')}/>
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        className={cls.recommendations}
                        target={'_blank'}
                    />
                    <Text size={ETextSize.L} className={cls.commentTitle} title={t('Комментарий')}/>
                    <AddCommentForm onSendComment = {onSendComment}/>
                    <CommentList isLoading={commentsIsLoading} comments={comments} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)

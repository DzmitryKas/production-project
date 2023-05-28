import { type FC, memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { classNames, useAppDispatch } from 'shared/lib'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page/Page'

interface IArticleDetailsPageProps {
    className?: string
}

const reducers: TReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
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
                <Button onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарий')}/>
                <AddCommentForm onSendComment = {onSendComment}/>
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)

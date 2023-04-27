import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface IArticleDetailsPageProps {
    className?: string
}

const reducers: TReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарий')}/>
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)

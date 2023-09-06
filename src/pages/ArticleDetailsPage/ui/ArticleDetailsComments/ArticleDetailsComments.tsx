import { type FC, memo, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui'
import { ETextSize } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { VStack } from 'shared/ui/Stack'

interface IArticleDetailsCommentsProps {
    className?: string
    id: string
}

const ArticleDetailsComments: FC<IArticleDetailsCommentsProps> = memo(({ className, id }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            <Text size={ETextSize.L} title={t('Комментарий')}/>
            <AddCommentForm onSendComment = {onSendComment}/>
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    )
})

export { ArticleDetailsComments }

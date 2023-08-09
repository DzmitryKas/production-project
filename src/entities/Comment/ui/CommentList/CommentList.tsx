import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { type IComment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'

interface ICommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

const CommentList: FC<ICommentListProps> = memo((props) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return <VStack gap={'16'} max className={classNames('', {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </VStack>
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </VStack>
    )
})

export { CommentList }

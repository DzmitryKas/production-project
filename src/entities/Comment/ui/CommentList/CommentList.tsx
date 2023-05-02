import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './CommentList.module.scss'
import { useTranslation } from 'react-i18next'
import { type IComment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'

interface ICommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

const CommentList: FC<ICommentListProps> = memo((props) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return <div className={classNames(cls.CommentList, {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </div>
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    )
})

export { CommentList }

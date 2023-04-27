import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './CommentCard.module.scss'
import { useTranslation } from 'react-i18next'
import { type IComment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ICommentCardProps {
    className?: string
    comment: IComment
    isLoading?: boolean
}

const CommentCard: FC<ICommentCardProps> = memo(({
    className,
    comment,
    isLoading
}) => {
    const { t } = useTranslation()
    console.log({ comment })

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar}/>}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    )
})

export { CommentCard }

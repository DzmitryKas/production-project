import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './CommentCard.module.scss'
import { useTranslation } from 'react-i18next'
import { type IComment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ICommentCardProps {
    className?: string
    comment?: IComment
    isLoading?: boolean
}

const CommentCard: FC<ICommentCardProps> = memo(({
    className,
    comment,
    isLoading
}) => {
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar}/>}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    )
})

export { CommentCard }
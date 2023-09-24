import { memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './NotificationItem.module.scss'
import { type INotification } from '../../model/types/notification'
import { Card, Text } from '@/shared/ui'
import { ECardTheme } from '@/shared/ui/Card/Card'

interface INotificationItemProps {
    className?: string
    item: INotification
}

const NotificationItem = memo(({ className, item }: INotificationItemProps) => {
    const content = (
        <Card
            theme={ECardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    )

    if (item.href) {
        return <a className={cls.link} href={item.href} target={'__blank'}>
            {content}
        </a>
    }

    return content
})

export { NotificationItem }

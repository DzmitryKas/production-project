import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './NotificationButton.module.scss'
import { Button, EButtonTheme } from 'shared/ui'
import { Icon } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'

interface INotificationButtonProps {
    className?: string
}

const NotificationButton: FC<INotificationButtonProps> = memo(({ className }) => {
    return (
        <Popover
            direction={'bottom left'}
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={
                <Button theme={EButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
})

export { NotificationButton }

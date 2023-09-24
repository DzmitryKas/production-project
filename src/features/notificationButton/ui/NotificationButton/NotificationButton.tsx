import {type FC, memo, useCallback, useState} from 'react'
import {classNames} from '@/shared/lib'
import cls from './NotificationButton.module.scss'
import {Button, EButtonTheme} from '@/shared/ui'
import {Icon} from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import {NotificationList} from '@/entities/Notification'
import {Popover} from '@/shared/ui/Popups'
import {Drawer} from '@/shared/ui/Drawer/Drawer'
import {BrowserView, MobileView} from 'react-device-detect'

interface INotificationButtonProps {
    className?: string
}

const NotificationButton: FC<INotificationButtonProps> = memo(({ className }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const trigger = <Button theme={EButtonTheme.CLEAR} onClick={onOpenDrawer}>
        <Icon Svg={NotificationIcon} inverted />
    </Button>

    return (
        <div>
            <BrowserView>
                <Popover
                    direction={'bottom left'}
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    )
})

export { NotificationButton }

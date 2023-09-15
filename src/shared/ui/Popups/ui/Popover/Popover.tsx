import { Popover as HPopover } from '@headlessui/react'
import { type ReactNode } from 'react'
import { type TDropdownDirection } from 'shared/types/ui'
import { mapDirectionClasses } from '../../styles/consts'
import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'
import { classNames } from 'shared/lib'

interface IPopoverProps {
    className?: string
    trigger: ReactNode
    direction?: TDropdownDirection
    children: ReactNode
}

export const Popover = (props: IPopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props

    const menuClasses = [mapDirectionClasses[direction]]

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}

import React, { type FC, memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import cls from './Drawer.module.scss'
import { useTranslation } from 'react-i18next'
import { Portal } from '../Portal/Portal'
import { type TMods } from 'shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'

interface IDrawerProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

const Drawer: FC<IDrawerProps> = memo(({ className, children, isOpen, onClose }) => {
    const { t } = useTranslation()

    const mods: TMods = {
        [cls.opened]: isOpen
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})

export { Drawer }

import React, { type FC, memo, type ReactNode } from 'react'
import { classNames, useModal } from 'shared/lib'
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
    lazy?: boolean
}

const Drawer: FC<IDrawerProps> = memo(({ className, children, isOpen, onClose, lazy }) => {
    const { t } = useTranslation()
    const { isClosing, isMounted, close } = useModal({
        animationDelay: 300,
        isOpen,
        onClose
    })

    const mods: TMods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})

export { Drawer }

import React, { type FC, type ReactNode } from 'react'
import { classNames, useModal } from '@/shared/lib'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'
import { type TMods } from '@/shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'

interface IModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

const Modal: FC<IModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
    const { isClosing, isMounted, close } = useModal({
        animationDelay: ANIMATION_DELAY,
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
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export { Modal }

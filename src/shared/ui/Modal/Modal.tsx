import React, { useState, type FC, type ReactNode, useRef, useEffect, useCallback } from 'react'
import { classNames } from 'shared/lib'
import cls from './Modal.module.scss'
import { Portal } from 'shared/ui'

interface IModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300

const Modal: FC<IModalProps> = ({ className, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const contentHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler()
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={contentHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal

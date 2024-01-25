import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Overlay.module.scss'

interface IOverlayProps {
    className?: string
    onClick?: () => void
}

const Overlay: FC<IOverlayProps> = memo(({ className, onClick }) => {
    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    )
})

export { Overlay }

import { type CSSProperties, type FC, useMemo } from 'react'
import { classNames } from 'shared/lib'
import cls from './Avatar.module.scss'
import { type TMods } from 'shared/lib/classNames/classNames'

interface IAvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

const Avatar: FC<IAvatarProps> = ({ className, src, size, alt }) => {
    const mods: TMods = {}

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    return (
        <img alt={alt} style={styles} src={src} className={classNames(cls.Avatar, mods, [className])} />
    )
}

export { Avatar }

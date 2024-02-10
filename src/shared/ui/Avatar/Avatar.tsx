import { type CSSProperties, type FC, useMemo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Avatar.module.scss'
import { type TMods } from '@/shared/lib/classNames/classNames'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon'
import UserIcon from '../../assets/icons/avatar.svg'
import { Skeleton } from '../Skeleton'

interface IAvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

const Avatar: FC<IAvatarProps> = ({ className, src, size = 100, alt, fallbackInverted }) => {
    const mods: TMods = {}

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    const fallback = <Skeleton width={size} height={size} border={'50%'}/>
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            alt={alt}
            style={styles}
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
        />
    )
}

export { Avatar }

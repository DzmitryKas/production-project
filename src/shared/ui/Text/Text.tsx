import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './Text.module.scss'

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum ETextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum ETextSize {
    M = 'size_m',
    L = 'size_l',
}

interface ITextProps {
    className?: string
    title?: string
    text?: string
    theme?: ETextTheme
    align?: ETextAlign
    size?: ETextSize
}

const Text: FC<ITextProps> = memo(({
    className,
    title,
    text,
    theme = ETextTheme.PRIMARY,
    align = ETextAlign.LEFT,
    size = ETextSize.M
}) => {
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})

export { Text }

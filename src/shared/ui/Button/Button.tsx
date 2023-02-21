import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum EButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum EButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: EButtonTheme
    size?: EButtonSize
    square?: boolean
}

const Button: FC<IButtonProps> = (props) => {
    const { className, children, theme, size = EButtonSize.M, square, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square
    }

    return (
        <button className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
            {children}
        </button>
    )
}

export default Button

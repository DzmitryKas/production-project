import { type ButtonHTMLAttributes, type FC, memo } from 'react'
import { classNames, type TMods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum EButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
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
    disabled?: boolean
}

const Button: FC<IButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = EButtonTheme.OUTLINE,
        size = EButtonSize.M,
        square,
        disabled,
        ...otherProps
    } = props

    const mods: TMods = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})

export { Button }

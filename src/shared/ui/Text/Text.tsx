import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './Text.module.scss'

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface ITextProps {
    className?: string
    title?: string
    text?: string
    theme?: ETextTheme
}

const Text: FC<ITextProps> = memo(({
    className,
    title,
    text,
    theme = ETextTheme.PRIMARY
}) => {
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})

export { Text }

import { type FC, type HTMLAttributes, memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Card.module.scss'
import { useTranslation } from 'react-i18next'

export enum ECardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: ECardTheme
    max?: boolean
}

const Card: FC<ICardProps> = memo(({
    className,
    children,
    theme = ECardTheme.NORMAL,
    max = false,
    ...otherProps
}) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Card, { [cls.maxWidth]: max }, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    )
})

export { Card }

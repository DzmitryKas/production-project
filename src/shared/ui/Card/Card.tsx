import { type FC, type HTMLAttributes, memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import cls from './Card.module.scss'
import { useTranslation } from 'react-i18next'

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

const Card: FC<ICardProps> = memo(({ className, children, ...otherProps }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    )
})

export { Card }

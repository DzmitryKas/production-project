import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum EAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string
    theme?: EAppLinkTheme
}

const AppLink: FC<IAppLinkProps> = memo((props) => {
    const { to, className, children, theme = EAppLinkTheme.PRIMARY, ...otherProps } = props

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
})

export { AppLink }

import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui'
import { EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
    className?: string
}

const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar

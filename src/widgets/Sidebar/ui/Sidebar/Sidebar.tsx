import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { AppLink, Button, EButtonTheme } from 'shared/ui'
import { EButtonSize } from 'shared/ui/Button/Button'
import { EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'

interface ISidebarProps {
    className?: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                theme={EButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                size={EButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
}

export default Sidebar

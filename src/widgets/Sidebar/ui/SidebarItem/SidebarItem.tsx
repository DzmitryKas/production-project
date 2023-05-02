import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { type ISidebarItem } from 'widgets/Sidebar/model/types/sidebar'

interface ISidebarItemProps {
    item: ISidebarItem
    collapsed: boolean
    authOnly?: boolean
}

const SidebarItem: FC<ISidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation()

    const isAuth = useSelector(getUserAuthData)

    if (!isAuth && item.authOnly) {
        return null
    }

    return (
        <AppLink
            className={classNames('', { [cls.collapsed]: collapsed }, [''])}
            theme={EAppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})

export { SidebarItem }

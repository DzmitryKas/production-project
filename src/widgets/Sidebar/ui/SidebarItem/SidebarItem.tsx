import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type ISidebarItem } from '../../model/items'

interface ISidebarItemProps {
    item: ISidebarItem
    collapsed: boolean
}

const SidebarItem: FC<ISidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation()

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

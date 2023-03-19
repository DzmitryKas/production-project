import { type FC, memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, EButtonTheme } from 'shared/ui'
import { EButtonSize } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface ISidebarProps {
    className?: string
}

const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

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
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
})

export default Sidebar

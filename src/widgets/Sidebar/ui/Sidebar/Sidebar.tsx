import { type FC, memo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Button, EButtonTheme } from '@/shared/ui'
import { EButtonSize } from '@/shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { useSelector } from 'react-redux'
import { VStack } from '@/shared/ui/Stack'

interface ISidebarProps {
    className?: string
}

const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside
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
            <VStack role={'navigation'} gap={'8'} className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </aside>
    )
})

export default Sidebar

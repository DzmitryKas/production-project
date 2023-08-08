import { type FC, memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib'
import cls from './Tabs.module.scss'
import { useTranslation } from 'react-i18next'
import { Card, ECardTheme } from '../Card/Card'

export interface ITabItem {
    value: string
    content: ReactNode
}

interface ITabsProps {
    className?: string
    tabs: ITabItem[]
    value: string
    onTabClick: (tab: ITabItem) => void
}

const Tabs: FC<ITabsProps> = memo(({
    className,
    tabs,
    value,
    onTabClick
}) => {
    const { t } = useTranslation()

    const clickHandle = useCallback((tab: ITabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})

export { Tabs }

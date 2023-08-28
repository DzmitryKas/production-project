import { type FC, Fragment, memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib'
import cls from './Dropdown.module.scss'
import { useTranslation } from 'react-i18next'
import { Menu } from '@headlessui/react'
import { type TDropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

export interface IDropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}
interface IDropdownProps {
    className?: string
    items: IDropdownItem[]
    trigger: ReactNode
    direction?: TDropdownDirection
}

const mapDirectionClasses: Record<TDropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight
}

const Dropdown: FC<IDropdownProps> = memo(({
    className,
    trigger,
    items,
    direction = 'bottom right'
}) => {
    const { t } = useTranslation()
    const menuClasses = [mapDirectionClasses[direction]]

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item,
                                { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return <Menu.Item
                            key={index}
                            as={AppLink}
                            to={item.href}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    }

                    return <Menu.Item
                        key={index}
                        as={Fragment}
                        disabled={item.disabled}
                    >
                        {content}
                    </Menu.Item>
                })}
            </Menu.Items>
        </Menu>
    )
})

export { Dropdown }

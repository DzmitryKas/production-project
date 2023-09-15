import { type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib'
import { Button } from '../../../index'
import { HStack } from '../../../Stack'
import { type TDropdownDirection } from 'shared/types/ui'
import { mapDirectionClasses } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface IListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface IListBoxProps {
    items?: IListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    direction?: TDropdownDirection
    label?: string
}
export function ListBox (props: IListBoxProps) {
    const { label, items, value, defaultValue, onChange, className, readonly, direction = 'bottom right' } = props

    const optionsClasses = [mapDirectionClasses[direction]]

    return (
        <HStack gap={'4'}>
            {label && <span>{`${label}>`}</span>}
            <HListBox
                as={'div'}
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                disabled={readonly}
            >
                <HListBox.Button className={popupCls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            className={cls.item}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled
                                    })}>
                                    {selected && '!!!'}
                                    {item.value}
                                </li>
                            )}
                        </HListBox.Option>

                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    )
}

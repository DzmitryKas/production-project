import { type ChangeEvent, useMemo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Select.module.scss'
import { type TMods } from '@/shared/lib/classNames/classNames'

export interface ISelectOption<T extends string> {
    value: T
    content: string
}

interface ISelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<ISelectOption<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

const Select = <T extends string>({
    className,
    label,
    value,
    onChange,
    options,
    readonly
}: ISelectProps<T>) => {
    const optionsList = useMemo(() => {
        return options?.map(option => (
            <option
                className={cls.option}
                value={option.value}
                key={option.value}
            >{option.content}</option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    const mods: TMods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
}

export { Select }

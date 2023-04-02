import { type ChangeEvent, type FC, memo, useMemo } from 'react'
import { classNames } from 'shared/lib'
import cls from './Select.module.scss'
import { type TMods } from 'shared/lib/classNames/classNames'

export interface ISelectOption {
    value: string
    content: string
}

interface ISelectProps {
    className?: string
    label?: string
    options?: ISelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

const Select: FC<ISelectProps> = memo(({
    className,
    label,
    value,
    onChange,
    options,
    readonly
}) => {
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
        onChange?.(e.target.value)
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
})

export { Select }

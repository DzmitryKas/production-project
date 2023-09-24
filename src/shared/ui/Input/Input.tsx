import React, { memo, type ButtonHTMLAttributes, type FC, useState, useEffect, useRef } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Input.module.scss'
import { type TMods } from '@/shared/lib/classNames/classNames'

type HTMLInputProps = Omit<ButtonHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface IInputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autoFocus?: boolean
    readonly?: boolean

}
const Input: FC<IInputProps> = memo((props) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        autoFocus,
        readonly,
        ...otherProps
    } = props
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null)

    const isCaretVisible = isFocused && !readonly

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    const mods: TMods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder &&
                <div className={cls.placeholder}>
                    {placeholder + '>'}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible &&
                    <span
                        style={{ left: `${caretPosition * 9}px` }}
                        className={cls.caret}
                    />
                }
            </div>

        </div>
    )
})

export { Input }

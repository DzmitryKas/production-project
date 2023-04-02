import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { ECurrency } from '../../model/types/currency'

interface ICurrencySelectProps {
    className?: string
    value?: ECurrency
    onChange?: (value: ECurrency) => void
    readonly?: boolean
}

const options = [
    {
        value: ECurrency.EUR, content: ECurrency.EUR
    },
    {
        value: ECurrency.RUB, content: ECurrency.RUB
    },
    {
        value: ECurrency.USD, content: ECurrency.USD
    }
]

const CurrencySelect: FC<ICurrencySelectProps> = memo(({
    className,
    value,
    onChange,
    readonly
}) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as ECurrency)
    }, [onChange])

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    )
})

export { CurrencySelect }

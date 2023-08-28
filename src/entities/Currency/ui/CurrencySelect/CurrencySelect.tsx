import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { ECurrency } from '../../model/types/currency'
import { ListBox } from 'shared/ui/ListBox/ListBox'

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
        <ListBox
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            value={value} items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction={'top right'}
        />
    )
})

export { CurrencySelect }

import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { ECountry } from '../../model/types/country'

interface ICountrySelectProps {
    className?: string
    value?: ECountry
    onChange?: (value: ECountry) => void
    readonly?: boolean
}

const options = [
    {
        value: ECountry.Belarus, content: ECountry.Belarus
    },
    {
        value: ECountry.Russia, content: ECountry.Russia
    },
    {
        value: ECountry.Ukraina, content: ECountry.Ukraina
    }
]

const CountrySelect: FC<ICountrySelectProps> = memo(({
    className,
    value,
    onChange,
    readonly
}) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as ECountry)
    }, [onChange])

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    )
})

export { CountrySelect }

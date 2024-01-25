import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from '@/shared/ui/Popups'
import { ECountry } from '../../model/consts/consts'

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
        <ListBox
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            value={value} items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction={'top right'}
        />
    )
})

export { CountrySelect }

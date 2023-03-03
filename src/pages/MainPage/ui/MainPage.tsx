import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Input } from 'shared/ui'

const MainPage = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <div>
            {t('Главная')}
            <Input placeholder={'Введите текст'} value={value} onChange={onChange} />
        </div>
    )
}

export default MainPage

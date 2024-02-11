import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Input } from '@/shared/ui'
import { Page } from '@/widgets/Page'

const MainPage = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <Page data-testid={'MainPage'}>
            {t('Главная')}
            <Input placeholder={'Введите текст'} value={value} onChange={onChange} />
        </Page>
    )
}

export default MainPage

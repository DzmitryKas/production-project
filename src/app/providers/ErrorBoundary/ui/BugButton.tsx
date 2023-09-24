import { useEffect, useState } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'

// компонент для тестирования
const BugButton = () => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const onError = () => { setError(true) }

    return (
        <div onClick={onError} className={classNames('', {}, [''])}>
            {t('Ошибка')}
        </div>
    )
}

export default BugButton

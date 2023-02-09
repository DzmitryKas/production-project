import { useTranslation } from 'react-i18next'

const AboutPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('О компании')}
        </div>
    )
}

export default AboutPage

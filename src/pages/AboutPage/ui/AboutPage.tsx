import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AboutPage = () => {
    const { t } = useTranslation()

    return (
        <Page data-testid={'AboutPage'}>
            {t('О компании')}
        </Page>
    )
}

export default AboutPage

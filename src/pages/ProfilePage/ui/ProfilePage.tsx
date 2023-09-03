import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui'

interface IProfilePageProps {
    className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation('profile')

    if (!id) {
        return <Text text={t('Профиль не найден')} />
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage

import { type FC } from 'react'
import { classNames } from '@/shared/lib'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'

interface IProfilePageProps {
    className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()

    return (
        <Page data-testid={'ProfilePage'} className={classNames('', {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage

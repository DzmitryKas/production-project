import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const initialReducers: TReducersList = {
    profile: profileReducer
}

interface IProfilePageProps {
    className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage

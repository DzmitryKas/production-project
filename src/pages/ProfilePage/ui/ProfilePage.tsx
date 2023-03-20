import { type FC, useEffect } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'

const initialReducers: TReducersList = {
    profile: profileReducer
}

interface IProfilePageProps {
    className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage

import { type FC, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type ECurrency } from 'entities/Currency'
import { type ECountry } from 'entities/Country'
import { ETextTheme, Text } from 'shared/ui'
import { EValidateProfileError } from 'entities/Profile/model/types/profile'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'

const initialReducers: TReducersList = {
    profile: profileReducer
}

interface IProfilePageProps {
    className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const { id } = useParams<{ id: string }>()

    const validateErrorTranslates = {
        [EValidateProfileError.INCORRECT_USER_DATA]: t('Имя  и фамилия обязательны'),
        [EValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [EValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [EValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [EValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении')
    }

    useInitialEffect(() => {
        id && dispatch(fetchProfileData(id))
    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || '') }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: ECurrency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: ECountry) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap={'16'} max>
                    <ProfilePageHeader />
                    {validateErrors?.length && validateErrors.map(err =>
                        <Text
                            key={err}
                            text={validateErrorTranslates[err]}
                            theme={ETextTheme.ERROR}
                        />)}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeAvatar={onChangeAvatar}
                        onChangeUsername={onChangeUsername}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>

    )
}

export default ProfilePage

import { type FC, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, EButtonTheme, Text } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

interface IProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const dispatch = useAppDispatch()

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Text title={t('Профиль пользователя')} />
            {canEdit && (
                <>
                    {readonly
                        ? <Button theme={EButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                        : <HStack gap={'8'}>
                            <Button theme={EButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                {t('Отменить')}
                            </Button>
                            <Button theme={EButtonTheme.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    }
                </>
            )}
        </HStack>
    )
}

export { ProfilePageHeader }

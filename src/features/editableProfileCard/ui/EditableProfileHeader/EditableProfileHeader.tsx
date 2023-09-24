import { type FC, memo, useCallback } from 'react'
import { classNames, useAppDispatch } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, EButtonTheme, Text } from '@/shared/ui'
import { HStack } from '@/shared/ui/Stack'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getUserAuthData } from '@/entities/User'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'

interface IEditableProfileHeaderProps {
    className?: string
}

const EditableProfileHeader: FC<IEditableProfileHeaderProps> = memo(({ className }) => {
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
                        ? <Button theme={EButtonTheme.OUTLINE} onClick={onEdit} data-testid={'EditableProfileHeader.EditButton'}>
                            {t('Редактировать')}
                        </Button>
                        : <HStack gap={'8'}>
                            <Button
                                theme={EButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid={'EditableProfileHeader.CancelButton'}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={EButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid={'EditableProfileHeader.SaveButton'}

                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    }
                </>
            )}
        </HStack>
    )
})

export { EditableProfileHeader }

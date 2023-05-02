import { type FC, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, EButtonTheme, Text } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { getUserAuthData } from 'entities/User'

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль пользователя')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? <Button theme={EButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                        : <>
                            <Button theme={EButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                                {t('Отменить')}
                            </Button>
                            <Button theme={EButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </>
                    }
                </div>
            )}
        </div>
    )
}

export { ProfilePageHeader }

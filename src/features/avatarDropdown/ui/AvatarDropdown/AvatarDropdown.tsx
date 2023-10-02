import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from '@/shared/const/router'

interface IAvatarDropdownProps {
    className?: string
}

const AvatarDropdown: FC<IAvatarDropdownProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            direction={'bottom left'}
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админка'),
                        href: RoutePath.admin_panel
                    }]
                    : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id
                },

                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    )
})

export { AvatarDropdown }

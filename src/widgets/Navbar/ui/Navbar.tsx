import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, Button, EButtonTheme, ETextTheme, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface INavbarProps {
    className?: string
}

const Navbar: FC<INavbarProps> = memo(({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Ulbi TV App')}
                    theme={ETextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={EAppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    direction={'bottom left'}
                    className={cls.dropdown}
                    items={[
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
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={EButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    )
})

export default Navbar

import { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { EButtonTheme, Modal } from '../../../shared/ui'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
    className?: string
}

const Navbar: FC<INavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa maiores praesentium saepe sed sunt. Ex harum maxime nostrum quisquam sed.')}
            </Modal>

        </div>
    )
}

export default Navbar

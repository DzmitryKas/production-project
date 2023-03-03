import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { Modal } from 'shared/ui'
import cls from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

interface ILoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal: FC<ILoginModalProps> = ({ className, onClose, isOpen }) => {
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    )
}

export { LoginModal }

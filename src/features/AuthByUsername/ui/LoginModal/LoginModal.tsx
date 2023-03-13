import { type FC, Suspense } from 'react'
import { classNames } from 'shared/lib'
import { Loader, Modal } from 'shared/ui'
import { LoginFormLazy } from '../LoginForm/LoginFormLazy'

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
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    )
}

export { LoginModal }

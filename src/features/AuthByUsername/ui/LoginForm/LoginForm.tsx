import { type FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared/ui'

interface ILoginFormProps {
    className?: string
}

const LoginForm: FC<ILoginFormProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <Input
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}

export { LoginForm }

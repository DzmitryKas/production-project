import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, EButtonTheme } from '@/shared/ui'

interface ILangSwitcherProps {
    className?: string
    short?: boolean
}

const LangSwitcher: FC<ILangSwitcherProps> = memo(({ className, short }) => {
    const { t, i18n } = useTranslation()

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (

        <Button theme={EButtonTheme.CLEAR} onClick={onToggle} className={classNames('', {}, [className])}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>

    )
})

export default LangSwitcher

import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button, EThemeButton } from 'shared/ui'

interface ILangSwitcherProps {
    className?: string
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (

        <Button theme={EThemeButton.CLEAR} onClick={onToggle} className={classNames('', {}, [className])}>
            {t('Язык')}
        </Button>

    )
}

export default LangSwitcher

import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ETheme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, EButtonTheme } from 'shared/ui'

interface IThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={EButtonTheme.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
            {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}

export default ThemeSwitcher

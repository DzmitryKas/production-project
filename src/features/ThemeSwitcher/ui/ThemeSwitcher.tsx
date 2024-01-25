import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button, EButtonTheme } from '@/shared/ui'
import { ETheme } from '@/shared/const/theme'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface IThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={EButtonTheme.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
            {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})

export default ThemeSwitcher

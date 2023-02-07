import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, EThemeButton} from "shared/ui";

interface IThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={EThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
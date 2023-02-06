import { FC } from "react";
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui";
import { EAppLinkTheme } from "shared/ui/AppLink/AppLink";

interface INavbarProps {
  className?: string
}

const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
            </div>
    );
};

export default Navbar;
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface INavbarProps {
    className?: string
}

const Navbar: FC<INavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
            </div>
        </div>
    )
}

export default Navbar

import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from '@/shared/ui'

interface IPageLoaderProps {
    className?: string
}

const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}

export default PageLoader

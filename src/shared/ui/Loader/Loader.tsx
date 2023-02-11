import { type FC } from 'react'
import { classNames } from 'shared/lib'
import './Loader.scss'

interface ILoaderProps {
    className?: string
}

const Loader: FC<ILoaderProps> = ({ className }) => {
    return (
        <div className={classNames('lds-roller', {}, [className])}><div></div><div></div><div></div><div>

        </div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader

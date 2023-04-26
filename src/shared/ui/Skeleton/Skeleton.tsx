import { type CSSProperties, type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './Skeleton.module.scss'

interface ISkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

const Skeleton: FC<ISkeletonProps> = memo((props) => {
    const {
        className, height,
        width,
        border
    } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        >
        </div>
    )
})

export { Skeleton }

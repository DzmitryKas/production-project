import React, { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './Icon.module.scss'

interface IIconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

const Icon: FC<IIconProps> = memo(({ className, Svg }) => {
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    )
})

export { Icon }

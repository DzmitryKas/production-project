import React, { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Icon.module.scss'

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

const Icon: FC<IIconProps> = memo(({ className, Svg, inverted, ...otherProps }) => {
    return (
        <Svg {...otherProps} className={classNames(cls.Icon, { [cls.inverted]: inverted }, [className])} />
    )
})

export { Icon }

import { type ReactNode, type FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Flex.module.scss'
import { type TMods } from 'shared/lib/classNames/classNames'

export type TFlexJustify = TFlexAlign | 'between'
export type TFlexAlign = 'start' | 'center' | 'end'
export type TFlexDirection = 'row' | 'column'
export type TFlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<TFlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween
}

const alignClasses: Record<TFlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd
}

const directionClasses: Record<TFlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn
}

const gapClasses: Record<TFlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32
}

export interface IFlexProps {
    className?: string
    children: ReactNode
    justify?: TFlexJustify
    align?: TFlexAlign
    direction: TFlexDirection
    gap?: TFlexGap
    max?: boolean
}

const Flex: FC<IFlexProps> = ({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max
}) => {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ]
    const mods: TMods = {
        [cls.max]: max
    }
    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    )
}

export { Flex }

import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Text.module.scss'

export enum ETextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum ETextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum ETextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ITextProps {
    className?: string
    title?: string
    text?: string
    theme?: ETextTheme
    align?: ETextAlign
    size?: ETextSize

    'data-testid'?: string
}

type THeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<ETextSize, THeaderTag> = {
    [ETextSize.S]: 'h3',
    [ETextSize.M]: 'h2',
    [ETextSize.L]: 'h1'
}

const Text: FC<ITextProps> = memo(({
    className,
    title,
    text,
    theme = ETextTheme.PRIMARY,
    align = ETextAlign.LEFT,
    size = ETextSize.M,
    'data-testid': dataTestId = 'Text'
}) => {
    const HeaderTag = mapSizeToHeaderTag[size]
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title &&
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            }
            {text &&
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            }
        </div>
    )
})

export { Text }

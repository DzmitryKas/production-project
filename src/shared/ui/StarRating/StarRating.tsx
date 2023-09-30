import { type FC, memo, useState } from 'react'
import { classNames } from '@/shared/lib'
import cls from './StarRating.module.scss'
import { useTranslation } from 'react-i18next'
import { Icon } from '../Icon/Icon'
import StarIcon from '@/shared/assets/icons/star.svg'

interface IStarRatingProps {
    className?: string
    onSelect?: (starCount: number) => void
    size?: number

    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

const StarRating: FC<IStarRatingProps> = memo(({
    className,
    size = 30,
    selectedStars = 0,
    onSelect
}) => {
    const { t } = useTranslation()
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map(starNumber =>
                <Icon
                    className={classNames(
                        cls.StarIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.selected]: isSelected
                        },
                        []
                    )}
                    key={starNumber}
                    Svg={StarIcon}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />)}
        </div>
    )
})

export { StarRating }

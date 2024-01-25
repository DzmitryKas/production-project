import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ArticleViewSelector.module.scss'
import { useTranslation } from 'react-i18next'
import ListIcon from '@/shared/assets/icons/list.svg'
import TiledIcon from '@/shared/assets/icons/tiled.svg'
import { Button, EButtonTheme } from '@/shared/ui'
import { Icon } from '@/shared/ui/Icon/Icon'
import { EArticleView } from '../../model/consts/consts'

interface IArticleViewSelectorProps {
    className?: string
    view: EArticleView
    onViewClick: (view: EArticleView) => void
}

const viewTypes = [
    {
        view: EArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: EArticleView.BIG,
        icon: ListIcon
    }
]

const ArticleViewSelector: FC<IArticleViewSelectorProps> = memo(({
    className,
    view: currentView,
    onViewClick
}) => {
    const onClick = (newView: EArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(({ icon, view }, index) => (
                <Button theme={EButtonTheme.CLEAR} key={index} onClick={onClick(view)}>
                    <Icon
                        className={classNames('', { [cls.notSelected]: view !== currentView })}
                        Svg={icon}
                    />
                </Button>
            ))}
        </div>
    )
})

export { ArticleViewSelector }

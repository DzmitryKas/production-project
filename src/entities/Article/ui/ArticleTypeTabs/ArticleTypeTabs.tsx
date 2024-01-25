import { type FC, memo, useCallback, useMemo } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { type ITabItem, Tabs } from '@/shared/ui/Tabs'
import { EArticleType } from '../../model/consts/consts'

interface IArticleTypeTabsProps {
    className?: string
    value: EArticleType
    onChangeType: (type: EArticleType) => void
}

const ArticleTypeTabs: FC<IArticleTypeTabsProps> = memo(({
    className,
    value,
    onChangeType
}) => {
    const { t } = useTranslation()

    const typeTabs = useMemo<ITabItem[]>(() => [
        {
            value: EArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: EArticleType.IT,
            content: t('Айти')
        },
        {
            value: EArticleType.ECONOMICS,
            content: t('Экономика')
        },
        {
            value: EArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t])

    const onTabClick = useCallback((tab: ITabItem) => {
        onChangeType(tab.value as EArticleType)
    }, [onChangeType])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            value={value}
            onTabClick={onTabClick}
            tabs={typeTabs}
        />
    )
})

export { ArticleTypeTabs }

import { type FC, memo, useMemo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { type ISelectOption, Select } from '@/shared/ui/Select'
import { type TSortOrder } from '@/shared/types'
import { EArticleSortField } from '@/entities/Article'

interface IArticleSortSelectorProps {
    className?: string
    sort: EArticleSortField
    order: TSortOrder
    onChangeOrder: (newOrder: TSortOrder) => void
    onChangeSort: (newSort: EArticleSortField) => void
}

const ArticleSortSelector: FC<IArticleSortSelectorProps> = memo(({
    className,
    onChangeOrder,
    onChangeSort,
    sort,
    order
}) => {
    const { t } = useTranslation()

    const orderOptions = useMemo<Array<ISelectOption<TSortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])
    const sortFieldOptions = useMemo<Array<ISelectOption<EArticleSortField>>>(() => [
        {
            value: EArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: EArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: EArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
})

export { ArticleSortSelector }

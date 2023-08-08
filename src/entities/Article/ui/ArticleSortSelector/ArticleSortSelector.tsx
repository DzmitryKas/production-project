import { type FC, memo, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { type ISelectOption, Select } from 'shared/ui/Select/Select'
import { EArticleSortField } from '../../model/types/article'
import { type TSortOrder } from 'shared/types'

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

    const orderOptions = useMemo<ISelectOption[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])
    const sortFieldOptions = useMemo<ISelectOption[]>(() => [
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

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as EArticleSortField)
    }, [onChangeSort])
    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as TSortOrder)
    }, [onChangeOrder])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
    )
})

export { ArticleSortSelector }

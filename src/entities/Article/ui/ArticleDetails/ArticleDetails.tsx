import { type FC, memo, useCallback, useEffect } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { ETextAlign, ETextSize, Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import DateIcon from 'shared/assets/icons/date.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { EArticleBlockType, type TArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { HStack, VStack } from 'shared/ui/Stack'

interface IArticleDetailsProps {
    className?: string
    id: string
}

const reducers: TReducersList = {
    articleDetails: articleDetailsReducer
}

const ArticleDetails: FC<IArticleDetailsProps> = memo(({ className, id }) => {
    const { t } = useTranslation('article-details')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    const renderBlock = useCallback((block: TArticleBlock) => {
        switch (block.type) {
            case EArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
            case EArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
            case EArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
            default:
                return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={24} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            </>
        )
    } else if (error) {
        content = (
            <Text
                align={ETextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <>
                <HStack justify={'center'} max className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap={'4'} max>
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={ETextSize.L}
                    />
                    <HStack gap={'8'} className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={EyeIcon} />
                        <Text text={String(article?.views)}/>
                    </HStack>
                    <HStack gap={'8'} className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={DateIcon} />
                        <Text text={article?.createdAt}/>
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap={'16'} max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    )
})

export { ArticleDetails }

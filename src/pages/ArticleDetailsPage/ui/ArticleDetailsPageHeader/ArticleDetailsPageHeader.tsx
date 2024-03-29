import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, EButtonTheme } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCatEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from '@/entities/Article'
import { HStack } from '@/shared/ui/Stack'
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router'

interface IArticleDetailsPageHeaderProps {
    className?: string
}

const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeaderProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCatEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleDetails(article?.id || ''))
    }, [article?.id, navigate])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Button
                theme={EButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button
                theme={EButtonTheme.OUTLINE}
                onClick={onEditArticle}
            >
                {t('Редактировать')}
            </Button>}
        </HStack>
    )
})

export { ArticleDetailsPageHeader }

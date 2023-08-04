import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticleDetailsPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, EButtonTheme } from 'shared/ui'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getCatEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from 'entities/Article'

interface IArticleDetailsPageHeaderProps {
    className?: string
}

const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeaderProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCatEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id || ''}/edit`)
    }, [article?.id, navigate])

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                theme={EButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button
                className={cls.editBtn}
                theme={EButtonTheme.OUTLINE}
                onClick={onEditArticle}
            >
                {t('Редактировать')}
            </Button>}
        </div>
    )
})

export { ArticleDetailsPageHeader }

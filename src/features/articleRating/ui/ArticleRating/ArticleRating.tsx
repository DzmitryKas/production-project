import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export interface IArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<IArticleRatingProps> = memo(({ className, articleId }) => {
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })
    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
    }, [handleRateArticle])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    if (isLoading) {
        return <Skeleton width='100%' height={120} />
    }

    const rating = data?.[0]

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    )
})

export default ArticleRating

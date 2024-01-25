import { lazy, Suspense } from 'react'
import { type IArticleRatingProps } from './ArticleRating'
import { Skeleton } from '@/shared/ui/Skeleton'

const ArticleRatingAsync = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingLazy = (props: IArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={'120px'} />}>
            <ArticleRatingAsync {...props} />
        </Suspense>
    )
}

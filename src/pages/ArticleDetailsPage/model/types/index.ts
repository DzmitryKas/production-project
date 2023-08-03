import { type IArticleDetailsRecommendationSchema } from './ArticleDetailsRecommendationSchema'
import { type IArticleDetailsCommentsSchema } from './ArticleDetailsCommentSchema'

export interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentsSchema
    recommendations: IArticleDetailsRecommendationSchema
}

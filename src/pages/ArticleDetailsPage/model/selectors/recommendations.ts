import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsRecommendationsIsLoading = (state: IStateSchema) => state.articleDetailsPage?.recommendations?.isLoading
export const getArticleDetailsRecommendationsError = (state: IStateSchema) => state.articleDetailsPage?.recommendations?.error

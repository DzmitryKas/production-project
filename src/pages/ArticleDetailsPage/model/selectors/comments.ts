import { type IStateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: IStateSchema) => state.articleDetailsComments?.isLoading
export const getArticleDetailsCommentsError = (state: IStateSchema) => state.articleDetailsComments?.error

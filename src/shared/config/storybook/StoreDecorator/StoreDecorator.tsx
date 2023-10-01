import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage'
import { profileReducer } from '@/features/editableProfileCard'

const defaultAsyncReducer: TReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: TReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>

)

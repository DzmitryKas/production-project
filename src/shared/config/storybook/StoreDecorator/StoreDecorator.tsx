import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/testing'
import { type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/testing'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
// eslint-disable-next-line dzmitry-kas-plugin/layer-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage'
// eslint-disable-next-line dzmitry-kas-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/testing'

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

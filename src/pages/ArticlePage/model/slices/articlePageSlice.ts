import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { EArticleSortField, EArticleType, EArticleView, type IArticle } from '@/entities/Article'
import { type IArticlesPageSchema } from '../types/articlePageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { type TSortOrder } from '@/shared/types/sort'

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: EArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: EArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: EArticleType.ALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<EArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<TSortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<EArticleSortField>) => {
            state.sort = action.payload
        },
        setType: (state, action: PayloadAction<EArticleType>) => {
            state.type = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        initState: state => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as EArticleView
            state.view = view
            state.limit = view === EArticleView.BIG ? 4 : 9
            state._inited = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state, action
            ) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= state.limit

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions
} = articlesPageSlice

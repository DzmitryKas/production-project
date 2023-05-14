import { lazy } from 'react'

export const ArticleDetailsPageLazy = lazy(async () => await new Promise(resolve =>
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ArticleDetailsPage')) }, 400)
))

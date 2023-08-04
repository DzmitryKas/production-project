import { lazy } from 'react'

export const ArticleEditPageLazy = lazy(async () => await new Promise(resolve =>
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ArticleEditPage')) }, 400)
))

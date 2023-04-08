import { lazy } from 'react'

export const ArticlesPageLazy = lazy(async () => await new Promise(resolve =>
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ArticlesPage')) }, 1500)
))

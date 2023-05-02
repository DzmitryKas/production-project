import { type FC, lazy } from 'react'
import { type IAddCommentFormProps } from './AddCommentForm'

export const AddCommentFormLazy = lazy<FC<IAddCommentFormProps>>(async () => await new Promise(resolve =>

    setTimeout(() => { resolve(import('./AddCommentForm')) }, 1500)
))

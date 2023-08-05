import { type FC, lazy } from 'react'
import { type IAddCommentFormProps } from './AddCommentForm'

export const AddCommentFormLazy = lazy<FC<IAddCommentFormProps>>(async () => await import('./AddCommentForm'))

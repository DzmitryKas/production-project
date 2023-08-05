import { type FC, lazy } from 'react'
import { type ILoginFormProps } from './LoginForm'

export const LoginFormLazy = lazy<FC<ILoginFormProps>>(async () => await import('./LoginForm'))

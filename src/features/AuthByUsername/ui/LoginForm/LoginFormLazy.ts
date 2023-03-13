import { type FC, lazy } from 'react'
import { type ILoginFormProps } from './LoginForm'

export const LoginFormLazy = lazy<FC<ILoginFormProps>>(async () => await new Promise(resolve =>

    setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
))

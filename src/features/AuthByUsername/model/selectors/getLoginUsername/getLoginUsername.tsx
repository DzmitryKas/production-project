import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginUsername = (state: IStateSchema) => state?.loginForm?.username || ''

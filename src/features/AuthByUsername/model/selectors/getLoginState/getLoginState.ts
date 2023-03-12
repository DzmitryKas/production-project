import { type IStateSchema } from 'app/providers/StoreProvider'

export const getLoginState = (state: IStateSchema) => state?.loginForm

import { type IStateSchema } from 'app/providers/StoreProvider'

export const getProfileValidateErrors = (state: IStateSchema) => state.profile?.validateErrors

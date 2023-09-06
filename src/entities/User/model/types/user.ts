export enum EUserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER'
}
export interface IUser {
    id: string
    username: string
    avatar?: string
    roles?: EUserRole[]
}

export interface IUserSchema {
    authData?: IUser
    _inited: boolean
}

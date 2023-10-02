import { type RouteProps } from 'react-router-dom'
import { type EUserRole } from '@/entities/User'

export type TAppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: EUserRole[]
}

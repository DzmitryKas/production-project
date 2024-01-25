import { type RouteProps } from 'react-router-dom'
// eslint-disable-next-line dzmitry-kas-plugin/layer-imports
import { type EUserRole } from '@/entities/User'

export type TAppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: EUserRole[]
}

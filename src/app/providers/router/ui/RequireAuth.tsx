import { useSelector } from 'react-redux'
import { type EUserRole, getUserAuthData } from '@/entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { getUserRoles } from '@/entities/User'
import { getRouteForbidden, getRouteMain } from '@/shared/const/router'

interface IRequireAuthProps {
    children: JSX.Element
    roles?: EUserRole[]
}

export function RequireAuth ({ children, roles }: IRequireAuthProps) {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()
    const userRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some(requiredRoles => {
            const hasRole = userRoles?.includes(requiredRoles)

            return hasRole
        })
    }, [roles, userRoles])

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    }

    return children
}

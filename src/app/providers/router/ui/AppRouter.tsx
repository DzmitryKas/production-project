import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { routeConfig, type TAppRouteProps } from '@/shared/config/routeConfig/routeConfig'
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: TAppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element }
                path={route.path}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter)

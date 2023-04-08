import React, { memo, Suspense, useCallback } from 'react'
import { Route } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routeConfig, type TAppRouteProps } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: TAppRouteProps) => {
        const element = <div className="wrapper_page">{route.element}</div>

        return (
            <Route
                key={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element }
                path={route.path}
            />
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader />}>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Suspense>
    )
}

export default memo(AppRouter)

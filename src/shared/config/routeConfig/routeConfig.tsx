import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

type TAppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum EAppRoutes {
    ABOUT = 'about',
    MAIN = 'main',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile',
    // last
    [EAppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<EAppRoutes, TAppRouteProps> = {
    [EAppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [EAppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    // last
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}

import { type RouteProps } from 'react-router-dom'
import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlePage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { EUserRole } from '@/entities/User'
import { ForbiddenPage } from '@/pages/ForbiddenPage'

export type TAppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: EUserRole[]
}

export enum EAppRoutes {
    ABOUT = 'about',
    MAIN = 'main',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.PROFILE]: '/profile/',
    [EAppRoutes.ARTICLES]: '/articles',
    [EAppRoutes.ARTICLE_DETAILS]: '/articles/',
    [EAppRoutes.ARTICLE_CREATE]: '/articles/new',
    [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [EAppRoutes.ADMIN_PANEL]: '/admin',
    [EAppRoutes.FORBIDDEN]: '/forbidden',
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
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    [EAppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [EUserRole.MANAGER, EUserRole.ADMIN]
    },
    [EAppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />
    },
    // last
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}

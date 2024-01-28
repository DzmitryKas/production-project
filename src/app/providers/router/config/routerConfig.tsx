import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlePage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { EUserRole } from '@/entities/User'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
    EAppRoutes,
    getRouteAbout, getRouteAdmin, getRouteArticleCreate, getRouteArticleDetails, getRouteArticleEdit,
    getRouteArticles, getRouteForbidden,
    getRouteMain,
    getRouteProfile
} from '@/shared/const/router'
import { type TAppRouteProps } from '@/shared/types/router'

export const routeConfig: Record<EAppRoutes, TAppRouteProps> = {
    [EAppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [EAppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />
    },
    [EAppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true
    },
    [EAppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true
    },
    [EAppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [EUserRole.MANAGER, EUserRole.ADMIN]
    },
    [EAppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />
    },
    // last
    [EAppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />
    }
}

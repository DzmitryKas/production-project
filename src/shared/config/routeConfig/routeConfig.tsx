import {RouteProps} from "react-router-dom";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import {MainPage} from "pages/MainPage";

export enum EAppRoutes {
    ABOUT='about',
    MAIN='main'
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}
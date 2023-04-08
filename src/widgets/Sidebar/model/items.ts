import type React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'

export interface ISidebarItem {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О компании'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статья',
        authOnly: true
    }
]

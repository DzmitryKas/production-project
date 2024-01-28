import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import { type ISidebarItem } from '../types/sidebar'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: ISidebarItem[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О компании'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticleIcon,
                    text: 'Статья',
                    authOnly: true
                }
            )
        }

        return sidebarItemsList
    }
)

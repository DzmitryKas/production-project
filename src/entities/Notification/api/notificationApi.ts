import { rtkApi } from 'shared/api/rtkApi'
import { type INotification } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
})

export const useNotifications = notificationApi.useGetNotificationsQuery

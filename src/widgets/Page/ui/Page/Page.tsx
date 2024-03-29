import { type FC, memo, type MutableRefObject, type ReactNode, useRef, type UIEvent } from 'react'
import { classNames, useAppDispatch } from '@/shared/lib'
import cls from './Page.module.scss'
import { useInfiniteScroll } from '../../../../shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { type ITestProps } from '@/shared/types/test'

interface IPageProps extends ITestProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page: FC<IPageProps> = memo((props) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: IStateSchema) => getScrollSaveByPath(state, pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    )
})

export { Page }

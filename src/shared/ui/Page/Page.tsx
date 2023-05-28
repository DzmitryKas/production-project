import { type FC, memo, type MutableRefObject, type ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib'
import cls from './Page.module.scss'
import { useInfiniteScroll } from '../../lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface IPageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

const Page: FC<IPageProps> = memo(({ className, children, onScrollEnd }) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
})

export { Page }

import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
    children?: ReactNode
    element?: HTMLElement
}

const Portal: FC<IPortalProps> = ({ children, element = document.body }) => {
    return (
        createPortal(children, element)
    )
}

export { Portal }

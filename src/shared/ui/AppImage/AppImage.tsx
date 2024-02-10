import { type FC, type ImgHTMLAttributes, memo, type ReactElement, useLayoutEffect, useState } from 'react'

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
}

const AppImage: FC<IAppImageProps> = memo(({ className, src, alt = 'image', errorFallback, fallback, ...otherProps }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setHasError(true)
        }
    }, [src])

    if (isLoading && fallback) {
        return fallback
    }

    if (hasError && errorFallback) {
        return errorFallback
    }

    return (
        <img className={className} src={src} alt={alt} {...otherProps} />
    )
})

export { AppImage }

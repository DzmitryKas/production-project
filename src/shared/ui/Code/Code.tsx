import { type FC, memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib'
import cls from './Code.module.scss'
import { Button, EButtonTheme } from 'shared/ui'
import CopyIcon from 'shared/assets/icons/copy.svg'

interface ICodeProps {
    className?: string
    text: string
}

const Code: FC<ICodeProps> = memo(({ className, text }) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={EButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
})

export { Code }

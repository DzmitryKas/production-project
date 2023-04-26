import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import cls from './ArticleCodeBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { type IArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface IArticleCodeBlockComponentProps {
    className?: string
    block: IArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = memo(({ className, block }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    )
})

export { ArticleCodeBlockComponent }

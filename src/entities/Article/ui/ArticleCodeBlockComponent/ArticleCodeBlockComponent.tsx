import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ArticleCodeBlockComponent.module.scss'
import { type IArticleCodeBlock } from '../../model/types/article'
import { Code } from '@/shared/ui/Code'

interface IArticleCodeBlockComponentProps {
    className?: string
    block: IArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = memo(({ className, block }) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    )
})

export { ArticleCodeBlockComponent }

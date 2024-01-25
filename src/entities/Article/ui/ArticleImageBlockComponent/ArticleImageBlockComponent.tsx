import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { type IArticleImageBlock } from '../../model/types/article'
import { ETextAlign, Text } from '@/shared/ui/Text'

interface IArticleImageBlockComponentProps {
    className?: string
    block: IArticleImageBlock
}

const ArticleImageBlockComponent: FC<IArticleImageBlockComponentProps> = memo(({ className, block }) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (<Text text={block.title} align={ETextAlign.CENTER} />)}
        </div>
    )
})

export { ArticleImageBlockComponent }

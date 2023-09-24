import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ArticleTextBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { type IArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/Text/Text'

interface IArticleTextBlockComponentProps {
    className?: string
    block: IArticleTextBlock
}

const ArticleTextBlockComponent: FC<IArticleTextBlockComponentProps> = memo(({ className, block }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={index} text={paragraph} />
            ))}
        </div>
    )
})

export { ArticleTextBlockComponent }

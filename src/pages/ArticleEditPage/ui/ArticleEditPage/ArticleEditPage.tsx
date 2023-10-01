import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ArticleEditPage.module.scss'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'

interface IArticleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<IArticleEditPageProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? 'ARTICLE EDIT PAGE' : 'ARTICLE NEW'}
        </Page>
    )
})

export default ArticleEditPage

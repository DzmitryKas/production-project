import { type FC, memo, useCallback } from 'react'
import { classNames, useAppDispatch } from 'shared/lib'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from 'shared/ui/Stack'

export interface IAddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: TReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm: FC<IAddCommentFormProps> = memo(({
    className,
    onSendComment
}) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify={'between'} max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm

import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, Card, EButtonTheme, Input, Modal, Text, Drawer } from '@/shared/ui'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { BrowserView, MobileView } from 'react-device-detect'

interface IRatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

const RatingCard: FC<IRatingCardProps> = memo(({
    className,
    feedbackTitle,
    title,
    hasFeedback,
    onAccept,
    onCancel,
    rate = 0
}) => {
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsOpenModal(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsOpenModal(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsOpenModal(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <VStack max gap='32'>
            <Text title={feedbackTitle}/>
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
            <HStack max gap={'16'} justify={'end'}>
                <Button onClick={cancelHandler} theme={EButtonTheme.OUTLINE_RED}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align={'center'} gap='8' max>
                <Text title={starsCount ? t('Спасибо за оценку') : title}/>
                <StarRating selectedStars={rate} size={40} onSelect={onSelectStars}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isOpenModal} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isOpenModal} lazy>
                    {modalContent}
                </Drawer>
            </MobileView>

        </Card>
    )
})

export { RatingCard }

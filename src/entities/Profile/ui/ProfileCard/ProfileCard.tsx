import { type FC } from 'react'
import { classNames } from '@/shared/lib'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { ETextTheme, Input, Loader, Text } from '@/shared/ui'
import { type IProfile } from '../../model/types/profile'
import { ETextAlign } from '@/shared/ui/Text'
import { Avatar } from '@/shared/ui/Avatar'
import { type TMods } from '@/shared/lib/classNames/classNames'
import { type ECurrency } from '@/entities/Currency'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect, type ECountry } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'

interface IProfileCardProps {
    className?: string
    data?: IProfile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency?: (currency: ECurrency) => void
    onChangeCountry?: (country: ECountry) => void
}

const ProfileCard: FC<IProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeFirstname,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props
    const { t } = useTranslation('profile')

    if (error) {
        return (
            <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробойте обновить страницу')}
                    theme={ETextTheme.ERROR}
                    align={ETextAlign.CENTER}
                />
            </HStack>

        )
    }

    if (isLoading) {
        return (
            <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Loader />
            </HStack>

        )
    }

    const mods: TMods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack gap={'16'} max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && <HStack justify={'center'} max className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} alt=""/>
            </HStack>}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testId={'ProfileCard.firstName'}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testId={'ProfileCard.lastName'}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )
}

export { ProfileCard }

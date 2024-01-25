import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { type IProfile } from '@/entities/Profile'
import { ECurrency } from '@/entities/Currency'
import { ECountry } from '@/entities/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'

const profile: IProfile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: ECurrency.USD,
    country: ECountry.Belarus,
    city: 'Moscow',
    username: 'admin213'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: { id: '1', username: 'admin' }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableProfileCard', () => {
    test('Режим редонли должен переключиться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileHeader.CancelButton')).toBeInTheDocument()
    })

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user')

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin')
    })

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'))

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutRequest = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'))

        expect(mockPutRequest).toHaveBeenCalled()
    })
})

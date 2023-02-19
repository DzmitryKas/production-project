import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation'

describe('Sidebar', () => {
    test('render sidebar', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('render sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const button = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})

import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
    test('render sidebar', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('render sidebar', () => {
        componentRender(<Sidebar />)
        const button = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})

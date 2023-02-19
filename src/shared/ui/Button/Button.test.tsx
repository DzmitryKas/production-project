import { render, screen } from '@testing-library/react'
import Button, { EThemeButton } from './Button'

describe('Button', () => {
    test('without theme', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('with theme clear', () => {
        render(<Button theme={EThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})

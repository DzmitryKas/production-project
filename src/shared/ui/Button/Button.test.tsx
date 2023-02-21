import { render, screen } from '@testing-library/react'
import Button, { EButtonTheme } from './Button'

describe('Button', () => {
    test('without theme', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('with theme clear', () => {
        render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})

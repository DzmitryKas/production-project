import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first class', () => {
        expect(classNames('sameClass')).toBe('sameClass')
    })

    test('with first class and additional', () => {
        const expected = 'sameClass class1'

        expect(classNames('sameClass', {}, ['class1'])).toBe(expected)
    })

    test('with first class and additional', () => {
        const expected = 'sameClass class1'

        expect(classNames('sameClass', {}, ['class1'])).toBe(expected)
    })

    test('with first class and additional', () => {
        const expected = 'sameClass class1 hovered scrollable'

        expect(classNames('sameClass', { hovered: true, scrollable: true }, ['class1'])).toBe(expected)
    })
})

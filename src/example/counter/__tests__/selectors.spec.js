import { counterValueSelector } from '../redux/selectors'

describe ('counter value selector', () => {
    it('returns the counter value', () => {
        const value = Math.random()

        expect(
            counterValueSelector({ counter: { value }})
        ).toEqual(value)
    })
})

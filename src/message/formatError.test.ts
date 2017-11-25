import { formatError } from './formatError'

test('should format error', () => {
    const result = formatError(new Error('This is the message'))
    expect(result).toContain('This is the message')
})

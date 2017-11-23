import { parseSlashCommand } from './parseSlashCommand'

test('should parse body into params object', () => {
    const result = parseSlashCommand('text=abc')
    return expect(result).resolves.toEqual({ text: 'abc' })
})

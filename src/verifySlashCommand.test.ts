import { verifySlashCommand } from './verifySlashCommand'
import { SlashCommand } from './slack'

test('should resolve when token is valid', () => {
    const slashCommand: SlashCommand = {
        token: 'the token',
        team_id: '',
        team_domain: '',
        channel_id: '',
        channel_name: '',
        user_id: '',
        user_name: '',
        command: '',
        text: '',
        response_url: '',
    }

    const result = verifySlashCommand(slashCommand, 'the token')

    return expect(result).resolves.toEqual(slashCommand)
})

test('should resolve when token is not valid', () => {
    const slashCommand: SlashCommand = {
        token: 'the token',
        team_id: '',
        team_domain: '',
        channel_id: '',
        channel_name: '',
        user_id: '',
        user_name: '',
        command: '',
        text: '',
        response_url: '',
    }

    const result = verifySlashCommand(slashCommand, 'different token')

    return expect(result).rejects.toBeInstanceOf(Error)
})

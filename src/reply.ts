import fetch, { Response as FetchResponse } from 'node-fetch'
import { SlashCommand, Message } from './types'

/**
 * Sends a Slack message using the `response_url` of a Slash Command.
 */
function reply(slashCommand: SlashCommand, body: Message): Promise<FetchResponse> {
    return fetch(slashCommand.response_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export { reply }

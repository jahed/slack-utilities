import fetch, { Response as FetchResponse } from 'node-fetch'
import { SlashCommand } from './SlashCommand'
import { Message } from '../message/Message'

/**
 * Sends a Slack message using the `response_url` of a Slash Command.
 */
export const reply = (
  slashCommand: SlashCommand,
  body: Message
): Promise<FetchResponse> => {
  return fetch(slashCommand.response_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

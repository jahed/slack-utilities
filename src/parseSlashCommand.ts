import * as qs from 'qs'
import { SlashCommand } from './types'

/**
 * Parses a query string provided by a Slash Command web hook.
 */
function parseSlashCommand(body: string): Promise<SlashCommand> {
    return Promise.resolve(qs.parse(body))
}

export { parseSlashCommand }

import * as qs from 'qs'
import { SlashCommand } from './SlashCommand'

/**
 * Parses a query string provided by a Slash Command web hook.
 */
export const parseSlashCommand = (body: string): Promise<SlashCommand> => (
  Promise.resolve(qs.parse(body))
)

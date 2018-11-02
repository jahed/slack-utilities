import { SlashCommand } from './SlashCommand'

/**
 * Verifies a Slash Command has the expected `verificationToken`, rejects otherwise.
 */
export const verifySlashCommand = (
  slashCommand: SlashCommand,
  verificationToken: string
): Promise<SlashCommand> => {
  if (slashCommand.token !== verificationToken) {
    return Promise.reject(
      new Error('Unknown Slack Verification Token.')
    )
  }

  return Promise.resolve(slashCommand)
}

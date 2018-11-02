/**
 * Format an error message to output to Slack.
 */
export const formatError = (error: Error): string => {
  return `${error}\n\`\`\`\n${error.stack}\n\`\`\``
}

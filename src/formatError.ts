/**
 * Format an error message to output to Slack.
 */
function formatError(error: Error): string {
    return `${error}\n\`\`\`\n${error.stack}\n\`\`\``
}

export { formatError }

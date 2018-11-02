export interface Field {
  readonly title?: string, // "Priority",
  readonly value?: string, // "High",
  readonly short?: boolean, // false
}

export interface Attachment {
  readonly fallback: string, // "Required plain-text summary of the attachment."
  readonly color?: string, // "#36a64f",
  readonly pretext?: string, // "Optional text that appears above the attachment block",
  readonly author_name?: string, // "Bobby Tables",
  readonly author_link?: string, // "http://flickr.com/bobby/",
  readonly author_icon?: string, // "http://flickr.com/icons/bobby.jpg",
  readonly title?: string, // "Slack API Documentation",
  readonly title_link?: string, // "https://api.slack.com/",
  readonly text?: string, // "Optional text that appears within the attachment",
  readonly fields?: [Field],
  readonly image_url?: string, // "http://my-website.com/path/to/image.jpg",
  readonly thumb_url?: string, // "http://example.com/path/to/thumb.png",
  readonly footer?: string, // "Slack API",
  readonly footer_icon?: string, // "https://platform.slack-edge.com/img/default_application_icon.png",
  readonly ts?: number, // 123456789,
  readonly mrkdwn_in?: ['pretext' | 'text' | 'fields']
}

export interface Message {
  readonly response_type?: 'in_channel' | 'ephemeral',
  readonly channel?: string,
  readonly username?: string,
  readonly icon_emoji?: string,
  readonly parse?: 'full' | 'none'
  readonly mrkdwn?: boolean,
  readonly link_names?: 1,
  readonly text?: string,
  readonly attachments?: [Attachment],
}

import { reply } from './reply'
import * as nock from 'nock'
import { SlashCommand } from './SlashCommand'
import { Message } from '../message/Message'

test('should post reply successfully', () => {
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
    response_url: 'https://example.com/endpoint'
  }

  const response: Message = {
    text: 'hello'
  }

  nock('https://example.com')
    .post('/endpoint')
    .reply(200, 'some response');

  const result = reply(slashCommand, response)
  return expect(result).resolves.toBeDefined()
})

test('should post reply and fail', () => {
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
    response_url: 'https://example.com/endpoint'
  }

  const response: Message = {
    text: 'hello'
  }

  nock('https://example.com')
    .post('/endpoint')
    .replyWithError('fail')

  const result = reply(slashCommand, response)
  return expect(result).rejects.toBeInstanceOf(Error)
})

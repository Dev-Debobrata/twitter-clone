export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'ADMIN controls: Toggle if Tweet is deemed inappropriate',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'username',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'tweetImage',
      title: 'Tweet Image',
      type: 'string',
    }
  ]
}

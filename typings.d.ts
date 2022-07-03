export interface Tweet {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'tweet'
  blockTweet: boolean
  text: string
  username: string
  profileImage: string
  tweetImage: string
}

export interface Comment {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'comment'
  comment: string
  tweetId: string
  username: string
  profileImg: string
  tweet: {
    _ref: string
    _type: 'reference'
  }
}
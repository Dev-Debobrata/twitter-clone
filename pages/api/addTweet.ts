import type { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "../../typings";

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: Tweet = JSON.parse(req.body);

  const mutations = {
    mutations: {
      create: {
        _type: 'tweet',
        text: data.text,
        username: data.username,
        blockTweet: false,
        profileImage: data.profileImage,
        tweetImage: data.tweetImage
      }
    }
  }

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.samity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}` // Problem

  const result = await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    },
    body: JSON.stringify(mutations),
    method: 'POST'
  })

  const json = await result.json();

  res.status(201).json({message: 'Added!'})
}

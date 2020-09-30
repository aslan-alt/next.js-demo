

import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import getPosts from 'lib/posts'

import path from 'path'

const Posts: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const posts = await getPosts()
    const fullPath = path.join(process.cwd())
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    res.write(JSON.stringify(posts))
    res.end()
}

export default Posts

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'


type Post = {
    id: string,
    title: string,
    content: string,
    date: string
}

const PostsIndex: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        axios.get('api/v1/posts').then(res => {
            setPosts(res.data)
        })
    }, [])
    return (
        <div>
            {posts.map(item => <ul key={item.id}>
                <li>{item.title}</li>
                <li>{item.content}</li>
                <li>{item.date}</li>
            </ul>)}
        </div>
    )
}

export default PostsIndex
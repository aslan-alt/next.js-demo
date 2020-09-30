import { getPosts } from 'lib/posts'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'


type Props = {
    posts: Post[]
}

const PostsIndex: NextPage<Props> = (props) => {//打包的时候会生成新的html内容
    const { posts } = props

    return (
        <div>
            <h1>文章列表</h1>
            {posts.map(item => {
                return (
                    <p key={item.id}>
                        <Link href={`posts/${item.id}`} as={`/posts/${item.id}`} >
                            <a>{item.id}</a>
                        </Link>
                    </p>
                )
            })}
        </div>
    )
}

export default PostsIndex;

export const getStaticProps: GetStaticProps = async () => {//会在打包的时候讲数据传递过去
    const posts = await getPosts()
    return {
        props: {
            posts
        }
    }
}
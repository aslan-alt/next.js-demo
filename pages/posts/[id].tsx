import { GetStaticProps, NextPage } from 'next'
import { getPostById, getPosts } from 'lib/posts'

type Props = {
    posts: {
        content: string,
        title: string,
        date: string
    }
}

const PostsShow: NextPage<Props> = (props) => {
    const { posts } = props
    return (
        <div>
            文章详情
            <h1>{posts.title}</h1>
            <p>{posts.content}</p>
            <p>{posts.date}</p>
        </div>
    )
}
export default PostsShow;

export const getStaticPaths = async () => {//定义路由表
    const posts = await getPosts()
    return {
        paths: posts.map(item => {
            return { params: { id: item.id } }
        }),
        fallback: true
    }
}
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const id = params.id//拿到路由传递的参数，去获得对应的参数
    const posts = await getPostById(id)
    return {
        props: {
            posts
        }
    }
}
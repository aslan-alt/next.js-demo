import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = async () => {
    const markdownDir = path.join(process.cwd(), 'markdown')
    const fileNames = await fs.promises.readdir(markdownDir)
    const postsList = fileNames.map(fileName => {
        const fullPath = path.join(markdownDir, fileName)

        console.log(fullPath)
        const id = fileName.replace(/\.md$/g, '')
        const text = fs.readFileSync(fullPath, 'utf-8')
        const { content, data: { title, date } } = matter(text)
        return { id, content, title, date }
    })
    return postsList
}
export const getPostById = async (id: string) => {
    const markdownDir = path.join(process.cwd(), 'markdown')
    const fullPath = path.join(markdownDir, id) + '.md'
    console.log(fullPath)
    const text = fs.readFileSync(fullPath, 'utf-8')
    const { content, data: { title, date } } = matter(text)
    return { content, title, date }
}




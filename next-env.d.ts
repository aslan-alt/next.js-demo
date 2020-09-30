declare module "*.png" {
    const value: string;
    export default value
}
declare module "*.css" {
    const value: Object;
    export default value
}
type Post = {
    id: string,
    title: string,
    content: string,
    date: string
}
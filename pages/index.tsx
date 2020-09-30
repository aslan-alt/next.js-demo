
import { GetServerSideProps, NextPage } from 'next'
import { UAParser } from 'ua-parser-js';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

type Props = {
  browser: {
    name: string,
    version: string,
    major: string
  }
}

const Index: NextPage<Props> = (props) => {
  console.log('props.browser')
  console.log(props.browser)
  return (
    <div>
      <h1>你的浏览器是:{props.browser.name}</h1>
      <Link href="/posts">
        <a >查看博客</a>
      </Link>
    </div>
  )
}

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ua = ctx.req.headers['user-agent']
  const result = new UAParser(ua)
  return {
    props: {
      browser: result.getBrowser()
    }
  }
} 

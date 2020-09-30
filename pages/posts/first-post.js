import React from 'react'
import styles from 'styles/x.module.css'
import png from 'assets/FFFF.png'
console.log(png)
export default function X() {
    return (
        <>
            <div>
                <h1>这是第一篇博客</h1>
                <hr />
                <a href="/">回到首页</a>
                <div className={styles.wrapper}>我是wrapper</div>
                <div className={styles.content}>我是内容</div>
                <img src={png} />
            </div>
            <style jsx>
                {`
                h1{
                    color:black;
                }
                `}
            </style>
        </>

    )
}
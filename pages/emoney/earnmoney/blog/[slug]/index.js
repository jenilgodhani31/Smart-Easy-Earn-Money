import BlogInfo from '@containers/EarnMoneyInfo/BlogInfo'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                <title>{"Earn extra money"}</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                    crossorigin="anonymous"></script>
            </Head>
            <div>
                 <BlogInfo type={"blog"} />
            </div>
        </Fragment>
    )
}

export default index
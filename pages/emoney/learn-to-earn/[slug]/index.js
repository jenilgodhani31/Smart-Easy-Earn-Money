
import LearnToEarnInfo from '@containers/LearnToEarnInfo'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                <title>{"Robox Exclusive"}</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                    crossorigin="anonymous"></script>
            </Head>
            <div>
                 <LearnToEarnInfo type={"LearnToEarn"} />
            </div>
        </Fragment>
    )
}

export default index
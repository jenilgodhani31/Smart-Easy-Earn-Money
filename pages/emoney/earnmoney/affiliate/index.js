
import Affiliate from '@containers/EarnMoney/Affiliate'
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
            <Affiliate />
        </Fragment>
    )
}

export default index

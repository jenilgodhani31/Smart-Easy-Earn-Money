
import ReferEarnInfo from '@containers/EarnMoneyInfo/ReferEarnInfo'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
  return (
    <Fragment>
      <Head>
        <title>{"Smart Ways to Earn Money"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
      <div>
        <ReferEarnInfo type={"ReferEarn"} />
      </div>
    </Fragment>
  )
}

export default index
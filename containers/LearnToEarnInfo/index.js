import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Ads from '@components/Ads'

const LearnToEarnInfo = ({ type }) => {
    const router = useRouter()
    const { slug } = router.query

    if (!slug) return <div>Loading...</div>

    const categoryData = gameData[type]

    if (!categoryData) return <div className="pt-10 pb-10 flex items-center text-black justify-center">Category not found</div>

    const marketingItem = categoryData.find(item => item.slug === `${slug}`)

    if (!marketingItem) return <Layout title="Not Found"><div className="pt-10 pb-10 flex items-center text-black justify-center"> item not found</div></Layout>

    const { name, title, Heading, content, Details, piITitle } = marketingItem

    return (
        <Layout title={name} className="p-5  text-[15px]">
            <div className="p-5 pt-[100px]">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className="text-black font-semibold px-5 pb-5 ">
                {Heading && (
                    <section className="mb-1 mt-2">
                        <p>{Heading}</p>
                    </section>)}

                {Details && (
                    <section className="">
                        <div className="list-disc list-inside ">
                            {Details.slice(0, 2).map((tip, idx) => <div className='mb-4' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}
      <div className="p-5">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="6816460021"
                        data-full-width-responsive="true"
                    />
                </div>
                {Details && (
                    <section className="">
                        <div className="list-disc list-inside ">
                            {Details.slice(2, 10).map((tip, idx) => <div className='mb-4' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}
                <div className='pt-10'>
                    <a href="/emoney" className="w-full pt-10 ">
                        <button className="flex items-center justify-center w-full p-5 text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300">
                            {"Earn Now"}

                        </button>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default LearnToEarnInfo

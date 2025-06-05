import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Ads from '@components/Ads'

const ReferEarnInfo = ({ type }) => {
    const router = useRouter()
    const { slug } = router.query

    if (!slug) return <div>Loading...</div>

    const categoryData = gameData[type]

    if (!categoryData) return <div className="pt-10 pb-10 flex items-center text-black justify-center">Category not found</div>

    const marketingItem = categoryData.find(item => item.slug === `${slug}`)

    if (!marketingItem) return <Layout title="Not Found"><div className="pt-10 pb-10 flex items-center text-black justify-center"> item not found</div></Layout>

    const { name, content, } = marketingItem

    console.log("marketingItem", marketingItem)

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
                {content?.whatIs && (
                    <section className="mb-4 mt-2">
                        <p>{content?.whatIs}</p>
                    </section>)}

                {content?.subTitle && (
                    <section className="mb-4">
                        <div className="list-disc list-inside ">
                            {content?.subTitle.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.reward && (
                    <section className="mb-4 mt-2">
                        <p>{content?.reward}</p>
                    </section>)}

                {content?.url && (
                    <div className='flex justify-center'>
                        <img src={content.url}
                            className=" w-[250px] h-[200px] pb-10"
                        />
                    </div>
                )}

                {content?.OurReview && (
                    <section className="mb-4">
                        <div className="list-disc list-inside ">
                            {content?.OurReview.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}
                <div className="p-5 ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="6816460021"
                        data-full-width-responsive="true"
                    />
                </div>
                {content?.HowToDownload && (
                    <section className="mb-4">
                        <div className="list-disc list-inside ">
                            {content?.HowToDownload.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}
                {content?.TermsAndConditions && (
                    <section className="mb-4">
                        <h2 className="">Terms And Conditions -</h2>
                        <div className="list-disc list-inside ">
                            {content?.TermsAndConditions.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
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

export default ReferEarnInfo

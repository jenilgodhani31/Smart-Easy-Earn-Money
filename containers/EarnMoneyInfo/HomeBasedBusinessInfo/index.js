import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Ads from '@components/Ads'

const HomeBasedBusinessInfo = ({ type }) => {
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
                {content?.howToStart && (
                    <p className='pt-5 pb-5'>{content?.howToStart}</p>
                )}

                {content?.noExperience && (
                    <p className='pt-5 pb-5'>{content?.noExperience}</p>
                )}
                {content?.paragraph && (
                    <p className='pt-2 pb-2'>{content?.paragraph}</p>
                )}

                {content?.whyGoodIdea && (
                    <section className="mb-2 mt-2">
                        <h2 className="">Why it's a good idea -</h2>
                        <p>{content?.whyGoodIdea}</p>
                    </section>
                )}
                <div className="p-5 ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="6816460021"
                        data-full-width-responsive="true"
                    />
                </div>
                {content?.requirements && (
                    <section className='mt-5'>
                        <h2 className="">What you need -</h2>
                        {Array.isArray(content?.requirements) ? (
                            <div className="list-disc list-inside">
                                {content?.requirements.map((item, idx) => <div className="mb-1" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.requirements}</p>
                        )}
                    </section>
                )}

                {content?.proTips && (
                    <section className='mt-5'>
                        <h2 className="">Pro Tips -</h2>
                        {Array.isArray(content?.proTips) ? (
                            <div className="list-disc list-inside">
                                {content?.proTips.map((item, idx) => <div className="pb-2" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.proTips}</p>
                        )}
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

export default HomeBasedBusinessInfo

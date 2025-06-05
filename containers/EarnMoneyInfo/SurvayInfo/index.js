import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Ads from '@components/Ads'

const SurveyInfo = ({ type }) => {
    const router = useRouter()
    const { slug } = router.query

    if (!slug) return <div>Loading...</div>

    const categoryData = gameData[type]

    if (!categoryData) return <div className="pt-10 pb-10 flex items-center text-black justify-center">Category not found</div>

    const marketingItem = categoryData.find(item => item.slug === `${slug}`)

    if (!marketingItem) return <Layout title="Not Found"><div className="pt-10 pb-10 flex items-center text-black justify-center"> item not found</div></Layout>

    const { title, name, content, } = marketingItem

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

                {content?.whatIsSurvey && (
                    <section className="mb-4 mt-2">
                        <h2 className="">Who are they? -</h2>
                        <p>{content?.whatIsSurvey}</p>
                    </section>)}

                {content?.Rewards && (
                    <section className="mb-4 mt-2">
                        <h2 className="">Rewards -</h2>
                        <p>{content?.Rewards}</p>
                    </section>)}

                {content?.AmountPerSurvey && (
                    <section className="mb-4 mt-2">
                        <h2 className="">Amount per survey -</h2>
                        <p>{content?.AmountPerSurvey}</p>
                    </section>)}
                <div className=" ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="6816460021"
                        data-full-width-responsive="true"
                    />
                </div>
                {content?.reward && (
                    <section className="mb-4 mt-2">
                        <h2 className="">Min. reward threshold -</h2>
                        <p>{content?.reward}</p>
                    </section>)}

                {content?.OurReview && (
                    <section className='mt-5'>
                        <h2 className="">Our review -</h2>
                        {Array.isArray(content?.OurReview) ? (
                            <div className="list-disc list-inside">
                                {content?.OurReview.map((item, idx) => <div className="pb-2" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.OurReview}</p>
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

export default SurveyInfo 

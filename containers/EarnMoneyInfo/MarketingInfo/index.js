import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Ads from '@components/Ads'

const MarketingInfo = ({ type }) => {
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

                {title && (<section className="">
                    <h2 className="">What is it {title} ?</h2>
                </section>)}

                {content?.whatIs && (
                    <section className="mb-4 mt-2">
                        <p>{content?.whatIs}</p>
                    </section>)}



                {content?.suitableFor && (<section className="mb-4 mt-4">
                    <h2 className="">Suitable For -</h2>
                    <p>{content?.suitableFor}</p>
                </section>)}

                {content?.skillsRequired && (<section className="mb-4 mt-2">
                    <h2 className="">Skills Required -</h2>
                    <p>{Array.isArray(content?.skillsRequired) ? content?.skillsRequired.join(', ') : content?.skillsRequired}</p>
                </section>)}

                {content?.SkillsRequired && (
                    <section className="mb-4">
                        <h2 className="">Skills Required -</h2>
                        <div className="list-disc list-inside ">
                            {content?.SkillsRequired.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.timeRequired && (
                    <section className="mb-4 mt-2">
                        <h2 className="">Time Required -</h2>
                        {Array.isArray(content?.timeRequired) ? (
                            <div className="list-disc list-inside">
                                {content?.timeRequired.map((item, idx) => <div className='' key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.timeRequired}</p>
                        )}
                    </section>)}
                <div className=" ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="6816460021"
                        data-full-width-responsive="true"
                    />
                </div>
                {content?.tips && (
                    <section className="mb-4 mt-2">
                        <h2 className="">tips -</h2>
                        {Array.isArray(content?.tips) ? (
                            <div className="list-disc list-inside">
                                {content?.tips.map((item, idx) => <div className='' key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.tips}</p>
                        )}
                    </section>)}

                {content?.howToMonetize && (
                    <section>
                        <h2 className="mb-4">How To Monetize -</h2>
                        {Array.isArray(content?.howToMonetize) ? (
                            <div className="list-disc list-inside">
                                {content?.howToMonetize.map((item, idx) => <div className='mb-2' key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.howToMonetize}</p>
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

export default MarketingInfo

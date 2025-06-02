import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'

const PassiveIncomeIdeaInfo = ({ type }) => {
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
            <div className="text-black font-semibold px-5 pb-5 pt-[100px]">
                {content?.url && (
                    <div className='flex justify-center'>
                        <img src={content.url}
                            className=" w-[250px] h-[200px] pb-10"
                        />
                    </div>
                )}
                {piITitle && (
                    <section className="">
                        <h2 className=""> {piITitle} ?</h2>
                    </section>)}
                {content?.whatIs && (
                    <section className="mb-4 mt-2">
                        <p>{content?.whatIs}</p>
                    </section>)}

                {content?.subTitle && (
                    <section className="mt-4">
                        <div className="list-disc list-inside ">
                            {content.subTitle.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}
                {content?.GreatFor && (
                    <section className="mt-4">
                        <h2 className="mb-1">Great For :</h2>
                        <div className="list-disc list-inside ">
                            {content.GreatFor.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.SkillsetNeeded && (
                    <section className="mt-4">
                        <h2 className="mb-1">Skillset Needed :</h2>
                        <div className="list-disc list-inside ">
                            {content.SkillsetNeeded.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.PopularTools && (
                    <section className="mt-4">
                        <h2 className="mb-1">Popular Tools :</h2>
                        <div className="list-disc list-inside ">
                            {content.PopularTools.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.WhatYouWillNeed && (
                    <section className="mt-4">
                        <h2 className="mb-1">What You Will Need :</h2>
                        <div className="list-disc list-inside ">
                            {content.WhatYouWillNeed.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.TimeRequired && (
                    <section className="mt-4">
                        <h2 className="mb-1">TimeRequired  :</h2>
                        <div className="list-disc list-inside ">
                            {content.TimeRequired.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.HowToGetStarteds && (
                    <section className="mt-4">
                        <h2 className="mb-1">How To Get Started  :</h2>
                        <div className="list-disc list-inside ">
                            {content.HowToGetStarteds.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.Tips && (
                    <section className="mt-4">
                        <h2 className="mb-1">Tips :</h2>
                        <div className="list-disc list-inside ">
                            {content.Tips.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.WhereToBuy && (
                    <section className="mt-4">
                        <h2 className="mb-1">Where To Buy :</h2>
                        <div className="list-disc list-inside ">
                            {content.WhereToBuy.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.Earnby && (
                    <section className="mt-4">
                        <h2 className="mb-1">Earn by :</h2>
                        <div className="list-disc list-inside ">
                            {content.Earnby.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.HowDoesItWork && (
                    <section className="mt-4">
                        <h2 className="mb-1">How Does It Work :</h2>
                        <div className="list-disc list-inside ">
                            {content.HowDoesItWork.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.ExpectedEarnings && (
                    <section className="mt-4">
                        <h2 className="mb-1">Expected Earnings:</h2>
                        <div className="list-disc list-inside ">
                            {content.ExpectedEarnings.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.Websites && (
                    <section className="mt-4">
                        <h2 className="mb-1">Websites :</h2>
                        <div className="list-disc list-inside ">
                            {content.Websites.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.AdditionalTip && (
                    <section className="mt-4">
                        <h2 className="mb-1">Additional Tip :</h2>
                        <div className="list-disc list-inside ">
                            {content.AdditionalTip.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.Monetize && (
                    <section className="mt-4">
                        <h2 className="mb-1">How To Monetize :</h2>
                        <div className="list-disc list-inside ">
                            {content.Monetize.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.TopPayingWebsites && (
                    <section className="mt-4">

                        <div className="list-disc list-inside ">
                            {content.TopPayingWebsites.map((tip, idx) =>
                                <div className='mb-1' key={idx}>
                                    <div>{tip.Name}</div>
                                    <div>{tip.Payment}</div>

                                </div>)}
                        </div>
                    </section>
                )}

                {content?.AdditionalInfo && (
                    <section className="mt-4">

                        <div className="list-disc list-inside ">
                            {content.AdditionalInfo.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

                {content?.Other && (
                    <section className="mt-4">

                        <div className="list-disc list-inside ">
                            {content.Other.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
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


            {/* Button */}



        </Layout>
    )
}

export default PassiveIncomeIdeaInfo

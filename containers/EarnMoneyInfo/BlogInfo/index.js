import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'

const BlogInfo = ({ type }) => {
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
            <div className="text-black font-semibold px-5 pb-5 pt-[100px]">

                {title && (<section className="">
                    <h2 className="">What is it {title} ?</h2>
                </section>)}
                {content?.whatIs && (
                    <section className="mb-4 mt-2">
                        <p>{content?.whatIs}</p>
                    </section>)}

                {content?.subTitle && (
                    <section className="mb-4 mt-2">
                        <p>{content?.subTitle}</p>
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

                {content?.other && (
                    <section className="mt-4">

                        <div className="list-disc list-inside ">
                            {content.other.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

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
                {content?.WhatYouNeed && (
                    <section className='mt-5 mb-4'>
                        <h2 className="">What you need -</h2>
                        {Array.isArray(content?.WhatYouNeed) ? (
                            <div className="list-disc list-inside">
                                {content?.WhatYouNeed.map((item, idx) => <div className="mb-1" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.WhatYouNeed}</p>
                        )}
                    </section>
                )}

                {content?.HowToGetStarted && (
                    <section className="mb-4 mt-2">
                        <h2 className="mb-2">

                            How To Get Started -</h2>
                        {Array.isArray(content?.HowToGetStarted) ? (
                            <div className="list-disc list-inside">
                                {content?.HowToGetStarted.map((item, idx) => <div className='mb-2' key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.HowToGetStarted}</p>
                        )}
                    </section>)}
                {content?.BlogExtraOne && (
                    <section className="mb-4 mt-4">
                        <p>{content?.BlogExtraOne}</p>
                    </section>)}

                {content?.MoreHelp && (
                    <section className="mb-4 mt-4">
                        <h2 className="">More Help -</h2>
                        <p>{content?.MoreHelp}</p>
                    </section>)}

                {content?.ClosingNote && (
                    <section className="mb-4 mt-4">
                        <p>{content?.ClosingNote}</p>
                    </section>)}

                {content?.ExpectedEarnings && (
                    <section className="mb-4">
                        <div className="list-disc list-inside ">
                            {content?.ExpectedEarnings.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
                        </div>
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

                {content?.Terminologies && (
                    <section className='mt-5 mb-4'>
                        <h2 className="">Terminologies -</h2>
                        {Array.isArray(content?.Terminologies) ? (
                            <div className="list-disc list-inside">
                                {content?.Terminologies.map((item, idx) => <div className="mb-1" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.Terminologies}</p>
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

export default BlogInfo

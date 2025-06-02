import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'

const EarnMoneyInfo = ({ type }) => {
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


                {title && (<section className="">
                    <h2 className="">What is it {title} ?</h2>
                </section>)}

                {content?.intro && (
                    <section className="mb-4 mt-2">
                        <p>{content?.intro}</p>
                    </section>)}

                {content?.whatIs && (
                    <section className="mb-4 mt-2">
                        <p>{content?.whatIs}</p>
                    </section>)}

                {content?.subTitle && (
                    <section className="mb-4 mt-4">
                        <div className="list-disc list-inside ">
                            {content?.subTitle.map((tip, idx) => <div className='mb-3' key={idx}>{tip}</div>)}
                        </div>
                    </section>
                )}

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
                {content?.tips && (
                    <section className="mb-4">
                        <h2 className="">Tips-</h2>
                        <div className="list-disc list-inside ">
                            {content?.tips.map((tip, idx) => <div className='mb-3' key={idx}>{tip}</div>)}
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

                {content?.BlogExtra && (
                    <section className="mb-4 mt-2">
                        {Array.isArray(content?.BlogExtra) ? (
                            <div className="list-disc list-inside">
                                {content?.BlogExtra.map((item, idx) => <div className='mb-2' key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.BlogExtra}</p>
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

                {content?.BonusListOfWebsites && (
                    <section className="mb-4">
                        <h2 className="pb-2">Bonus List of Websites:</h2>
                        <div className="space-y-2">
                            {content?.BonusListOfWebsites.map((site, index) => (
                                <div className='pb-4'>
                                    <div className="" key={index}>
                                        <div className="mb-2">{site.Name}</div>
                                        <div className="mb-2">Topics Covered - {site.TopicsCovered}</div>
                                        <div className="mb-2">Payment - {site.Payment}</div>
                                        <div className="mb-2">Payment Method - {site.PaymentMethod}
                                        </div>

                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>
                )}

                {content?.ClosingNote && (
                    <section className="mb-4 mt-4">
                        <p>{content?.ClosingNote}</p>
                    </section>)}

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
                {/* HBB Card Info */}

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

                {/* E-commerce , sidehustle  Card Info*/}

                {content?.sellingInfo && (
                    <section className='mt-5'>

                        {Array.isArray(content?.sellingInfo) ? (
                            <div className="list-disc list-inside">
                                {content?.sellingInfo.map((item, idx) => <div className="mb-5" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.sellingInfo}</p>
                        )}
                    </section>
                )}

                {content?.availability && (
                    <section className="mb-4">
                        <h2 className="">Availability - </h2>
                        <p>{content?.availability}</p>
                    </section>)}

                {content?.paymentModes && (
                    <section className='mt-5'>
                        <h2 className="">Made of Payment -</h2>
                        {Array.isArray(content?.paymentModes) ? (
                            <div className="list-disc list-inside">
                                {content?.paymentModes.map((item, idx) => <div className="" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.paymentModes}</p>
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

                {content?.startHere && (
                    <section className='mt-5'>
                        <h2 className="">Start Here -</h2>
                        {Array.isArray(content?.startHere) ? (
                            <div className="list-disc list-inside">
                                {content?.startHere.map((item, idx) => <div className="pb-1" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.startHere}</p>
                        )}
                    </section>
                )}

                {content?.similarSites && (
                    <section className='mt-5'>
                        <h2 className="">Similar Sites -</h2>
                        {Array.isArray(content?.similarSites) ? (
                            <div className="list-disc list-inside">
                                {content?.similarSites.map((item, idx) => <div className="pb-1" key={idx}>{item}</div>)}
                            </div>
                        ) : (
                            <p>{content?.similarSites}</p>
                        )}
                    </section>
                )}

                {content?.Extra && (
                    <section className="mb-4 pt-4">
                        <p>{content?.Extra}</p>
                    </section>)}

                {/* Survay Card Info */}

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

                {/* Button */}
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

export default EarnMoneyInfo

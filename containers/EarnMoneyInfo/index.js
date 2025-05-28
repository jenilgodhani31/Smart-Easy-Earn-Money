import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Availability from './../Availability/index';

const EarnMoneyInfo = ({ type }) => {
    const router = useRouter()
    const { slug } = router.query

    console.log("type", type)

    if (!slug) return <div>Loading...</div>

    const categoryData = gameData[type]

    if (!categoryData) return <div className="pt-10 pb-10 flex items-center text-black justify-center">Category not found</div>

    const marketingItem = categoryData.find(item => item.slug === `${slug}`)

    if (!marketingItem) return <Layout title="Not Found"><div className="pt-10 pb-10 flex items-center text-black justify-center"> item not found</div></Layout>

    const { name, title, content } = marketingItem

    return (
        <Layout title={name} className="p-5  text-[15px]">
            <div className="text-black font-semibold pt-5 px-5 pb-5">

                {title && (<section className="mb-4">
                    <h2 className="">What is it{title} ?</h2>

                </section>)}

                <p>{content.whatIs}</p>

                {content.suitableFor && (<section className="mb-4 mt-2">
                    <h2 className="">Suitable For</h2>
                    <p>{content.suitableFor}</p>
                </section>)}


                {content.skillsRequired && (<section className="mb-4 mt-2">
                    <h2 className="">Skills Required</h2>
                    <p>{Array.isArray(content.skillsRequired) ? content.skillsRequired.join(', ') : content.skillsRequired}</p>
                </section>)}

                {content.timeRequired && (<section className="mb-4 mt-2">
                    <h2 className="">Time Required</h2>
                    <p>{content.timeRequired}</p>
                </section>)}

                {content.tips && (
                    <section className="mb-4">
                        <h2 className="">Tips-</h2>
                        <ul className="list-disc list-inside ">
                            {content.tips.map((tip, idx) => <div className='mb-3' key={idx}>{tip}</div>)}
                        </ul>
                    </section>
                )}

                {content.howToMonetize && (
                    <section>
                        <h2 className="">How To Monetize</h2>
                        {Array.isArray(content.howToMonetize) ? (
                            <ul className="list-disc list-inside">
                                {content.howToMonetize.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        ) : (
                            <p>{content.howToMonetize}</p>
                        )}
                    </section>
                )}

                {/* HBB Card Info */}

                {content.howToStart && (
                    <p className='pt-5 pb-5'>{content.howToStart}</p>
                )}

                {content.noExperience && (
                    <p className='pt-5 pb-5'>{content.noExperience}</p>
                )}
                {content.paragraph && (
                    <p className='pt-2 pb-2'>{content.paragraph}</p>
                )}

                {content.whyGoodIdea && (
                    <section className="mb-2 mt-2">
                        <h2 className="">Why it's a good idea -</h2>
                        <p>{content.whyGoodIdea}</p>
                    </section>
                )}



                {content.requirements && (
                    <section className='mt-5'>
                        <h2 className="">What you need -</h2>
                        {Array.isArray(content.requirements) ? (
                            <ul className="list-disc list-inside">
                                {content.requirements.map((item, idx) => <div className="mb-1" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.requirements}</p>
                        )}
                    </section>
                )}

                {/* E-commerce Card Info*/}

                {content.sellingInfo && (
                    <section className='mt-5'>

                        {Array.isArray(content.sellingInfo) ? (
                            <ul className="list-disc list-inside">
                                {content.sellingInfo.map((item, idx) => <div className="mb-5" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.sellingInfo}</p>
                        )}
                    </section>
                )}

                {content.availability && (<section className="mb-4">
                    <h2 className="">Availability - </h2>
                    <p>{content.availability}</p>
                </section>)}

                {content.paymentModes && (
                    <section className='mt-5'>
                        <h2 className="">Made of Payment -</h2>
                        {Array.isArray(content.paymentModes) ? (
                            <ul className="list-disc list-inside">
                                {content.paymentModes.map((item, idx) => <div className="" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.paymentModes}</p>
                        )}
                    </section>
                )}

                {content.proTips && (
                    <section className='mt-5'>
                        <h2 className="">Pro Tips -</h2>
                        {Array.isArray(content.proTips) ? (
                            <ul className="list-disc list-inside">
                                {content.proTips.map((item, idx) => <div className="pb-2" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.proTips}</p>
                        )}
                    </section>
                )}


                {content.startHere && (
                    <section className='mt-5'>
                        <h2 className="">Start Here -</h2>
                        {Array.isArray(content.startHere) ? (
                            <ul className="list-disc list-inside">
                                {content.startHere.map((item, idx) => <div className="pb-1" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.startHere}</p>
                        )}
                    </section>
                )}

                {content.similarSites && (
                    <section className='mt-5'>
                        <h2 className="">Similar Sites -</h2>
                        {Array.isArray(content.similarSites) ? (
                            <ul className="list-disc list-inside">
                                {content.similarSites.map((item, idx) => <div className="pb-1" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.similarSites}</p>
                        )}
                    </section>
                )}

                {/* Survay Card Info */}

                {content.whatIsSurvey && (<section className="mb-4 mt-2">
                    <h2 className="">Who are they? -</h2>
                    <p>{content.whatIsSurvey}</p>
                </section>)}

                {content.Rewards && (<section className="mb-4 mt-2">
                    <h2 className="">Rewards -</h2>
                    <p>{content.Rewards}</p>
                </section>)}

                {content.AmountPerSurvey && (<section className="mb-4 mt-2">
                    <h2 className="">Amount per survey -</h2>
                    <p>{content.AmountPerSurvey}</p>
                </section>)}

                {content.reward && (<section className="mb-4 mt-2">
                    <h2 className="">Min. reward threshold -</h2>
                    <p>{content.reward}</p>
                </section>)}

                {content.OurReview && (
                    <section className='mt-5'>
                        <h2 className="">Our review -</h2>
                        {Array.isArray(content.OurReview) ? (
                            <ul className="list-disc list-inside">
                                {content.OurReview.map((item, idx) => <div className="pb-2" key={idx}>{item}</div>)}
                            </ul>
                        ) : (
                            <p>{content.OurReview}</p>
                        )}
                    </section>
                )}

            </div>

        </Layout>
    )
}

export default EarnMoneyInfo

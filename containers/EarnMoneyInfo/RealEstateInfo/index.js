import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'

const RealEstateInfo = ({ type }) => {
    const router = useRouter()
    const { slug } = router.query

    if (!slug) return <div>Loading...</div>

    const categoryData = gameData[type]

    if (!categoryData) return <div className="pt-10 pb-10 flex items-center text-black justify-center">Category not found</div>

    const marketingItem = categoryData.find(item => item.slug === `${slug}`)

    if (!marketingItem) return <Layout title="Not Found"><div className="pt-10 pb-10 flex items-center text-black justify-center"> item not found</div></Layout>

    const { name, content, } = marketingItem

    return (
        <Layout title={name} className="p-5  text-[15px]">
            <div className="text-black font-semibold px-5 pb-5 pt-[100px]">
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
                {content?.other && (
                    <section className="mt-4">

                        <div className="list-disc list-inside ">
                            {content.other.map((tip, idx) => <div className='mb-1' key={idx}>{tip}</div>)}
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
                {content.info && (
                    <div>

                        {content.info?.map((item, index) => (
                            <div key={index} className="mb-10">
                                <div className="">{item.type}</div>
                                <div className="mt-2">
                                    <div>PROS:</div>
                                    <div className="list-disc">
                                        {item?.PROS?.map((item, idx) => (
                                            <div key={idx}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div>CONS:</div>
                                    <div className="list-disc ">
                                        {item?.CONS?.map((item, idx) => (
                                            <div key={idx}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

export default RealEstateInfo

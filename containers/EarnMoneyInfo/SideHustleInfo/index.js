import React from 'react'
import { useRouter } from 'next/router'
import gameData from 'data/gameData'
import Layout from '@components/Layout'
import Ads from '@components/Ads'

const SideHustleInfo = ({ type }) => {
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
                <div className=" ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="6816460021"
                        data-full-width-responsive="true"
                    />
                </div>
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
                {content?.Extra && (
                    <section className="mb-4 pt-4">
                        <p>{content?.Extra}</p>
                    </section>)}

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

export default SideHustleInfo

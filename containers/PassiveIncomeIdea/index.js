import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React from 'react'

function PassiveIncomeIdea() {

    const router = useRouter()

    function handleClick(slug) {
        // Navigate to detail page with slug as URL param (no query)
        router.push(`/emoney/passive-income-idea/${slug}`)
    }
    return (
        <Layout title={"Passive Income Idea"} className={"text-[15px]"}>
            <div className="">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
                {gameData?.PassiveIncomeIdea?.slice(0,10).map((item, index) => (
                    <div onClick={() => handleClick(item.slug)} key={index}>
                        <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
                            <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                                <img
                                    src={item.url}
                                    className="w-[56px] h-[56px]"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[16px] font-medium'>{item.name}</div>
                                <div className='text-[10px] '>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
                {gameData?.PassiveIncomeIdea?.slice(10,20).map((item, index) => (
                    <div onClick={() => handleClick(item.slug)} key={index}>
                        <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
                            <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                                <img
                                    src={item.url}
                                    className="w-[56px] h-[56px]"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[16px] font-medium'>{item.name}</div>
                                <div className='text-[10px] '>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
                {gameData?.PassiveIncomeIdea?.slice(20,30).map((item, index) => (
                    <div onClick={() => handleClick(item.slug)} key={index}>
                        <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
                            <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                                <img
                                    src={item.url}
                                    className="w-[56px] h-[56px]"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[16px] font-medium'>{item.name}</div>
                                <div className='text-[10px] '>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
                {gameData?.PassiveIncomeIdea?.slice(30,40).map((item, index) => (
                    <div onClick={() => handleClick(item.slug)} key={index}>
                        <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
                            <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                                <img
                                    src={item.url}
                                    className="w-[56px] h-[56px]"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[16px] font-medium'>{item.name}</div>
                                <div className='text-[10px] '>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
                {gameData?.PassiveIncomeIdea?.slice(40,50).map((item, index) => (
                    <div onClick={() => handleClick(item.slug)} key={index}>
                        <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
                            <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                                <img
                                    src={item.url}
                                    className="w-[56px] h-[56px]"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[16px] font-medium'>{item.name}</div>
                                <div className='text-[10px] '>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
                {gameData?.PassiveIncomeIdea?.slice(50,60).map((item, index) => (
                    <div onClick={() => handleClick(item.slug)} key={index}>
                        <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
                            <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                                <img
                                    src={item.url}
                                    className="w-[56px] h-[56px]"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[16px] font-medium'>{item.name}</div>
                                <div className='text-[10px] '>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default PassiveIncomeIdea


import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React from 'react'

function ReferEarn() {
  const router = useRouter()

  function handleClick(slug) {
    // Navigate to detail page with slug as URL param (no query)
    router.push(`/emoney/earnmoney/referearn/${slug}`)
  }
  return (
    <Layout title={"Refer & Earn"} className={"text-[15px]"}>
      <div className=" ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
        {gameData?.ReferEarn?.slice(0,7).map((item, index) => (
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
      <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
        {gameData?.ReferEarn?.slice(7,14).map((item, index) => (
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
      <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
        {gameData?.ReferEarn?.slice(14,22).map((item, index) => (
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

export default ReferEarn


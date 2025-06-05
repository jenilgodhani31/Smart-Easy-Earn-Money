import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React from 'react'

function Survey() {

  const router = useRouter()

  function handleClick(slug) {
    // Navigate to detail page with slug as URL param (no query)
    router.push(`/emoney/earnmoney/survey/${slug}`)
  }
  return (
    <Layout title={"Survey"} className={"text-[15px]"}>
      <div className="pt-[100px] p-5 ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex  flex-col items-center p-5 gap-4 '>
        {gameData?.Survey?.slice(0, 9).map((item, index) => (
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
      <div className="p-5 ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex  flex-col items-center p-5 gap-4 '>
        {gameData?.Survey?.slice(9, 18).map((item, index) => (
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
      <div className="p-5 ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex  flex-col items-center p-5 gap-4 '>
        {gameData?.Survey?.slice(18, 28).map((item, index) => (
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

export default Survey


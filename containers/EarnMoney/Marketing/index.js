import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React from 'react'
import Ads from '@components/Ads'

function Marketing() {
  const router = useRouter()

  function handleClick(slug) {
    router.push({
      pathname: `/emoney/earnmoney/marketing/${slug}`,
    })
  }

  return (
    <Layout title={"Marketing"} className={"text-[15px]"}>

      <div className=" ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex pt-[100px] flex-col items-center p-5 gap-4'>
        {gameData?.Marketing?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.slug)}
            className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]"
          >
            <div className='bg-image flex items-center justify-center p-2 bg-white rounded-[10px] shadow-2xl'>
              <img
                src={item.url}
                className="w-[56px] h-[56px]"
                alt={item.name}
              />
            </div>
            <div className='flex flex-col justify-center'>
              <div className='text-[16px] font-medium'>{item.name}</div>
              <div className='text-[10px]'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Marketing

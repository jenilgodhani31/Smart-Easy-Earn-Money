import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React from 'react'

function EMoney() {
  return (
    <Layout title={"eMoney"} className={"text-[15px]"}>
      <div className='flex  flex-col items-center p-5 gap-4 pt-[100px] h-screen'>

        <div className="">
          <Ads
            data-ad-format="auto"
            data-ad-slot="6816460021"
            data-full-width-responsive="true"
          />
        </div>
        {gameData?.EMoney?.map((item, index) => (
          <a href={item.slug} key={index}>
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
          </a>
        ))}
      </div>

    </Layout>
  )
}

export default EMoney


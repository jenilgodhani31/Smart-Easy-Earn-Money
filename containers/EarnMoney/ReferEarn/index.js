import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React from 'react'

function ReferEarn() {
  return (
    <Layout title={"Refer & Earn"} className={"text-[15px]"}>
      <div className='flex pt-[100px] flex-col items-center p-5 gap-4 '>
        {gameData?.ReferEarn?.map((item, index) => (
          <a href='' key={index}>
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

export default ReferEarn


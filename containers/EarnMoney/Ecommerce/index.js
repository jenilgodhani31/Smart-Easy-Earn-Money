import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React from 'react'

function Ecommerce() {
  const router = useRouter()

  function handleClick(slug) {
    // Navigate to detail page with slug as URL param (no query)
    router.push(`/emoney/earnmoney/e-commerce/${slug}`)
  }
  return (
    <Layout title={"E-commerce"} className={"text-[15px]"}>
      <div className='flex w-[350px] flex-col items-center p-5 gap-4 '>
        {gameData?.Ecommerce?.map((item, index) => (
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

export default Ecommerce


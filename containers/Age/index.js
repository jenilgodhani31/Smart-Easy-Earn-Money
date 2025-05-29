import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function Age() {
    const [selected, setSelected] = useState(null);

    return (
        <Layout title={"Age"} className={"text-[15px]"}>
            <div className="flex flex-col gap-5 mx-auto h-max  pb-[100px]">
                <div className="p-4 ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="9852606619"
                        data-full-width-responsive="true"
                    />
                </div>

                <div className='grid grid-cols-1 gap-4 p-4'>
                    {gameData?.Age?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`cursor-pointer text-center font-semibold  text-[18px] p-4 rounded-2xl ${selected === index ? 'bg-primary1 text-white' : 'bg-primary7'
                                }`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>

                <a href="/gender" className="w-full px-4">
                    <button className="flex items-center font-semibold  text-[20px] justify-center w-full p-3 text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300">
                        {"NEXT"}
                    </button>
                </a>
            </div>
        </Layout>
    )
}

export default Age

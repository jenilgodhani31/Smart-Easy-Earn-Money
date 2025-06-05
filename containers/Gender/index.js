// pages/age/index.js

import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Gender() {
    const router = useRouter()
    const [selected, setSelected] = useState(null);


    function handleClick() {
        if (selected === null) {
            toast.error("Please Select Gender");
        } else {
            router.push('/country');
        }
    }

    return (


        <Layout title={"Gender"} className={"text-[15px]"}>
            <div className="flex flex-col gap-5 mx-auto h-max p-4  pt-[100px] pb-[300px]">

                <Ads
                    data-ad-format="auto"
                    data-ad-slot="9852606619"
                    data-full-width-responsive="true"
                />


                <div className='grid grid-cols-1 gap-4 '>
                    {gameData?.Gender?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`cursor-pointer text-center font-semibold text-[18px] p-4 rounded-2xl ${selected === index ? 'bg-primary1 text-white' : 'bg-primary7'
                                }`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>


                <button
                    onClick={handleClick}
                    className="flex items-center font-semibold text-[20px] justify-center w-full p-3 text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300"
                >
                    {"NEXT"}
                </button>


            </div>
        </Layout>
    )
}

export default Gender

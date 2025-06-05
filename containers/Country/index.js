import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


function Country() {
    const [selected, setSelected] = useState(null);
    const router = useRouter()

    function handleClick() {
        if (selected === null) {
            toast.error("Please select Country");
        } else {
            router.push('/currency');
        }
    }
    return (
        <Layout title={"Country"} className={"text-[15px]"}>
             <div className="p-5 pt-[100px]">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className="flex flex-col gap-5 mx-auto h-max  p-4 ">


                <div className='grid grid-cols-1 gap-4'>
                    {gameData?.Country?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`flex ${item.name === "Other" ? 'justify-center' : 'items-center gap-10'
                                } cursor-pointer font-semibold  px-10 text-center text-[18px] p-4 rounded-2xl ${selected === index ? 'bg-primary1 text-white' : 'bg-primary7'
                                }`}
                        >
                            {/* Show image only if flag exists */}
                            {item.flag ? (
                                <img
                                    src={item.flag}
                                    alt={item.name}
                                    className="w-[50px] h-[30px] object-cover"
                                />
                            ) : null}

                            <div className={item.name === "Other" ? '' : 'text-center'}>
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>



                <button
                    onClick={handleClick}
                    className="flex items-center font-semibold  justify-center w-full p-4 text-[20px] text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300">
                    {"NEXT"}
                </button>

            </div>
        </Layout>
    )
}

export default Country

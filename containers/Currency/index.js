import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


function Currency() {
    const [selected, setSelected] = useState(null);
    const router = useRouter()

    function handleClick() {
        if (selected === null) {
            toast.error("Please select Currency");
        } else {
            router.push('/profession');
        }
    }
    return (
        <Layout title={"Currency"} className={"text-[15px]"}>
            <div className="flex flex-col gap-5 mx-auto h-max p-4 pb-[100px]">
                <div className="">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="9852606619"
                        data-full-width-responsive="true"
                    />
                </div>

                <div className='grid grid-cols-1 gap-4 '>
                    {gameData?.Currency?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`flex ${item.name === "Other" ? 'justify-center' : 'items-center gap-5'
                                } cursor-pointer font-semibold px-6 text-center text-[18px] p-4 rounded-2xl ${selected === index ? 'bg-primary1 text-white' : 'bg-primary7'
                                }`}
                        >
                            {/* Show image only if flag exists */}
                            {item.symbol ? (
                                <img
                                    src={item.symbol}
                                    alt={item.name}
                                    className="h-[30px]"
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

export default Currency

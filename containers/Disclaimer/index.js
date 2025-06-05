import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React from 'react'

function Disclaimer() {
    return (
        <Layout className={"text-[15px]"}>
            <div className="p-4 pt-[100px] pb-[400px] ">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="9852606619"
                    data-full-width-responsive="true"
                />
            </div>
            <div className=" px-8 text-black  pb-[125px]">

                <div className='pt-10 font-bold'>{"Disclaimer:  The information provided in this web app is for educational purposes only. We strive for accuracy but make no warranties regarding reliability or suitability. Your use of this web app is at your own risk. We are not liable for any loss or damage resulting from the use of this web app or linked content."}</div>
                  </div>
        </Layout>
    )
}

export default Disclaimer

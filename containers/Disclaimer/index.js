import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React from 'react'

function Disclaimer() {
    return (
        <Layout>
            <div className="p-4 ">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="9852606619"
                    data-full-width-responsive="true"
                />
            </div>
            <div className=" px-8   pb-[125px]">

                <div className='pt-10 font-bold'>{"Disclaimer: This Site is for entertainment and informational purposes only. RBX does not provide any free Robux hacks,  or any unauthorized services. All features are designed in compliance with the Official Studio Terms of Use."}</div>
                <div className='font-bold pt-10'>{"This is an unofficial site and has no affiliation with OFFICIAL CORPORATION. It functions solely as a free daily Robux  and RBX Skins  for fans and players, without any ability to earn free Robux. We want to emphasize that this site is NOT a hack or cheat. we are committed to promoting fair play!  Any content like name, logo or other visual elements within this app follows the guidelines established in the official terms of use.  If you have any questions or suspect that we may have breached then we are inviting you to contact us."}</div>
            </div>
        </Layout>
    )
}

export default Disclaimer

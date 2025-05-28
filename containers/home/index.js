"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "@components/model";
import Ads from "@components/Ads";
import Layout from "@components/Layout";


function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsClient(true);
  }, [isClient]);

  return (


    <Fragment >
      <div className="text-center bg-primary1 p-5 rounded-b-[30px] shadow-2xl w-[390px] sm:w-[360px]">
        {"Smart & Easy Earn Money"}
      </div>
      <div className="flex flex-col gap-12 p-5 pt-[80px] items-center justify-center text-black bg-white   ">
        <img src="/assets/images/homePage/homePage.png"
          className="w-[100px] h-[100px]"
        />
        <div className="text-center">{"Are you genuinely interested in making money from the comfort of your home without any initial investment? Discover practical strategies for earning money online without the need for upfront capital."}</div>

        <a href="/age" className="w-full">
          <button className="flex items-center justify-center w-full p-5 text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300">
            {"Let's Start"}
            <span>
              <img
                src="/assets/images/homePage/money.png"
                className="w-[30px] h-[30px]"
                alt="money icon"
              />
            </span>
          </button>
        </a>

      </div>




    </Fragment>



  );
}

export default Home;

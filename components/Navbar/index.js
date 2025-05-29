import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function NavBar({ title, className }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const pageName = router.pathname.split('/').pop();
  const characterName = router.query.item;

  const formatPageName = (name) => {
    if (name) {
      return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return "Page Title";
  };

  const finalTitle = title || (characterName ? formatPageName(characterName) : formatPageName(pageName));

  return (
    <Fragment>
      <nav className="relative  bg-primary1 rounded-b-[30px]  shadow-2xl">

        <div className="flex items-center justify-between px-4">

          <div className="flex items-center justify-center">
            <div onClick={handleBack} className="flex items-start justify-start cursor-pointer bg-primary2 px-3 py-2 rounded-full ">
              <FaArrowLeftLong size={20} />
            </div>
            <div className={`flex items-start justify-start p-5   text-white  font-semibold ${className || 'text-[25px]'}`}>
              {finalTitle}
            </div>
          </div>
          <a href="/emoney">
          <div className="flex items-start justify-start bg-primary2 cursor-pointer px-3 py-2 rounded-full ">
            <FaHome size={20} />
          </div>
          </a>

        </div>
        {/* Title */}


      </nav>
    </Fragment>
  );
}

export default NavBar;

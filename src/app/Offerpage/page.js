"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

function Offerpage() {
  const [showModal, setShowModal] = useState(false);
  function Toggle() {
    setShowModal(!showModal);
  }

  const [colorToggle, unToggle] = useState(false);
  return (
    <section className="bg-[#F1F1F1] h-full w-full px-4">
      <div className="py-4  gap-9">
        <div className="flex gap-[14px] items-center">
          <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
            <Link href={{ pathname: "/details" }} className="">
              <Image
                src={require("../../../assets/arrow.png")}
                className="h-4"
              />
            </Link>
          </div>
          <h1 className="text-[17px] font-Figtree font-bold">Make an Offer</h1>
        </div>
        <div className="flex justify-center py-4">
          <div className="item flex justify-center items-center bg-[#FFFFFF] w-[300px] h-[316px] rounded-[8px]">
            <div className="">
              <Image
                src={require("../../../assets/Panda.png")}
                className="w-[269px] h-[229px] rounded-[5px]"
              />
              <div className="py-3">
                <li className="list-none">
                  <div className="flex gap-[19%]">
                    <strong>Kanpai Panda</strong>
                    <span>3,284.73 USD</span>
                  </div>
                  <div className="flex gap-[19%]">
                    <span className="flex items-center">
                      Kanpai Pandas
                      <Image
                        src={require("../../../assets/verify.png")}
                        className="h-3"
                      />
                    </span>
                    <strong>1.89 ETH</strong>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h5 className="text-[16px] font-Figtree text-[#5A5A58]">Ending in</h5>
          <div className="py-3 flex justify-between">
            <div className="flex gap-[20px]">
              <span className="grid">
                <h1 className="text-[18px] font-Figtree font-bold">02:</h1>
                <h6 className="text-[14px] text-[#5A5A58] font-Figtree">Hrs</h6>
              </span>
              <span className="grid">
                <h1 className="text-[18px] font-Figtree font-bold">32:</h1>
                <h6 className="text-[14px] text-[#5A5A58] font-Figtree">
                  Mins
                </h6>
              </span>
              <span className="grid">
                <h1 className="text-[18px] font-Figtree font-bold">42</h1>
                <h6 className="text-[14px] text-[#5A5A58] font-Figtree">
                  Secs
                </h6>
              </span>
            </div>
            <div className="">
              <Image
                style={{ color: "red" }}
                src={require("../../../assets/Rounded.png")}
              />
              <h2 className="text-[14px]">1.2K</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid gap-[20px]">
            <div className="">
              <input
                placeholder="Enter Description of you NFT(s)"
                className="w-[51vh] border-[1px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"
              />
            </div>
            <div className="">
              <input
                placeholder="Current value"
                className="w-[51vh] border-[1px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"
              />
            </div>
            <div className="">
              <input
                placeholder="Additional offer"
                className="w-[51vh] border-[1px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setShowModal(true)} className="py-9">
        <button className="w-[50vh] h-[9vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">
          Make an offer
        </button>
      </div>

      <div className={!showModal ? "open : bg-[red]" : "close"}>
        <div classname="bg-black">
          <div className="" onClick={Toggle}>
            <Image
              src={require("../../../assets/vector.png")}
              className="float-left absolute top-[22vh] left-[50vh]"
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="grid">
              <div className="absolute right-[15vh] top-[26vh]">
                <Image
                  src={require("../../../assets/Successful1.png")}
                  className=""
                />
              </div>
              <div className="flex justify-center w-full">
                <div className="grid absolute bottom-[37vh]">
                  <h1 className="text-center text-[18px] text-[#080705] font-Figtree font-semibold">
                    Successful
                  </h1>
                  <h2 className="text-[16px] text-[#5A5A58] font-Figtree font-medium">
                    Your offer was sent successfully
                  </h2>
                </div>
                <Link
                  href={{ pathname: "/Home" }}
                  className="absolute bottom-[25%]"
                >
                  {/* <a href="../ " className=""></a> */}
                  <button className="w-[50vh] h-[8vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">
                    Go back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offerpage;

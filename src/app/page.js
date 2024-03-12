'use client'
import Image from "next/image"
import "./globals.css"
import Onbordpage from "./Onbordpage/page"
import { useEffect, useState } from "react"

function page() {
    const [showModal,setShowModal]=useState(false)
    useEffect(()=>{
        const timer=setTimeout(() => {setShowModal(true)},300)
        return()=>clearTimeout(timer)
    },[]);
    return(
      // 30000000
      <section className="bg-[#F1F1F1] h-screen w-screen">          
          <div className="">
            {!showModal?<div className="">
            <div className="spinner">
            <Image
                  src={require("../../assets/Logo.png")}
                  className=""
                  />
            </div>
              <div className="absolute top-[62%] left-0 right-0">
            <h1 className="flex justify-center">XCHNG</h1> 
              <div></div>
              
              
              </div>

            </div>: <Onbordpage/>}
          </div>
      </section>
    )
}

export default page;
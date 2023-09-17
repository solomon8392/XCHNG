import Image from "next/image"
import Link from "next/link"

export default function page() {
    return(
      <section className="">
           <div className="w-full h-full">
           <Image
                  src={require("../../assets/bg.png")}
                  className="w-full h-screen overflow-hidden"
                  />
           </div>
           <div className="">
                  <div className="flex justify-center overflow-hidden">
                      <div id="card" className="grid absolute bottom-[2%] bg-white w-[299px] rounded-[9px] h-[264px]">
                        <h1 className="flex justify-center text-[24px] font-Figtree font-600 text-[#080705] py-5">Uncover and Exchange <br /> Incredible New NFTs</h1>
                        <h5 className="flex justify-center text-[14px] font-Figtree font-400 text-center text-[#5A5A58]">Find NFT of your choice and swap with <br /> your existing NFT</h5>
                            <div className="flex justify-center">
                            <div className="bg-[#146B48] flex justify-center items-center text-center w-[259px] h-[48px] rounded-[8px]">
                        <Link href={{pathname: "/profile"}} className="text-[16px] overflow-hidden text-[#FFFFFF]">Get started</Link>
                            </div>
                            </div>    
                      </div>
                  </div>
          </div>
      </section>
    )
}
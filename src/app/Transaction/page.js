import Image from "next/image"
import Link from "next/link"

export default function Transactionpage(){
    return(
        <section className="bg-[#F1F1F1] h-full py-4 w-full px-4">
           <div className="">
           <div className="flex gap-[14px] items-center">
          <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
            <Image src={require("../../../assets/arrow.png")} className="h-4" />
          </div>
          <h1 className="text-[17px] font-Figtree font-bold">Make an Offer</h1>
        </div>
       <div className="py-4">
       <div className="grid grid-cols-2 justify-items-center items-center gap-3 m-0 p-0">
              <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
                <Image src={require("../../../assets/NFT2.png")} className="w-[130px]" />
                <div className="grid">
                  <span className="text-[#080705] text-[14px] font-Figtree">#4402</span>
                  <span className="text-[#5A5A58] text-[12px] font-Figtree">74.85 ETH</span>
                </div>
              </div>
              <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
                <Image src={require("../../../assets/NFT2.png")} className="w-[130px]" />
                <div className="grid">
                  <span className="text-[#080705] text-[14px] font-Figtree">#4402</span>
                  <span className="text-[#5A5A58] text-[12px] font-Figtree">74.85 ETH</span>
                </div>
              </div>
              <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
                <Image src={require("../../../assets/NFT2.png")} className="w-[130px]" />
                <div className="grid">
                  <span className="text-[#080705] text-[14px] font-Figtree">#4402</span>
                  <span className="text-[#5A5A58] text-[12px] font-Figtree">74.85 ETH</span>
                </div>
              </div>
              <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
                <Image src={require("../../../assets/NFT2.png")} className="w-[130px]" />
                <div className="grid">
                  <span className="text-[#080705] text-[14px] font-Figtree">#4402</span>
                  <span className="text-[#5A5A58] text-[12px] font-Figtree">74.85 ETH</span>
                </div>
              </div>          
        </div>
        <div className="py-4 grid gap-y-[20px] justify-center">
          <div className="flex gap-[20px] items-center">
            <input placeholder="Recipient’s address" className="w-[40vh] text-[#5A5A58] font-Figtree text-[14px] border-[1px] border-[#5A5A58] px-4 h-[8vh] rounded-[8px] outline-none" />
            <Image src={require ("../../../assets/scan.png")} className="w-6 h-6" />
          </div>
          <div className="grid gap-[8px]">
                    <input placeholder="Amount" className="w-[51vh] border-[1px] text-[#5A5A58] font-Figtree text-[14px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"/>
                    <h1 className="text-[#31302F] text-[14px] font-Figtree">Charges ~$0.05</h1>
                </div>
        </div>
       </div>
        <Link href={{pathname: "/Transactionpage"}} className="flex justify-center py-5">
      <button className="w-[50vh] h-[9vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">Next</button>
      </Link>
           </div>
        </section>
    )
}

// 
// addnew
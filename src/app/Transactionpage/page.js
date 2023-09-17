import Image from "next/image"



export default function Transactionpage() {
    return(
        <section className="px-4 bg-[#F1F1F1] h-screen py-4 w-full">
            <div className="flex gap-[14px] items-center">
          <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
            <Image src={require("../../../assets/arrow.png")} className="h-4" />
          </div>
          <h1 className="text-[24px] font-medium font-Figtree font-bold">Send Asset</h1>
        </div>
            <div className="">
                <div className="">
                    <h1>Your are sending</h1>
                    <div className="grid justify-center items-center">
                <Image src={require("../../../assets/NFT2.png")} className="w-[150px]" />
                <div className="grid">
                  <span className="text-[#080705] text-[14px] font-Figtree">Kawamii #773</span>
                  <span className="text-[#5A5A58] text-[12px] font-Figtree">0.0699 ETH</span>
                </div>
              </div>
              <div className="">
                <div className="grid">
                    <span>Kawamii #773</span>
                    <span>0.25 ETH</span>
                    <div className="">
                        <input placeholder="dedend" type="ddmememf" className="border-b-2 outline-none w-[50vh]  border-[#6A6A76]"/>
                    </div>
                </div>
              </div>
                </div>
            </div>
        </section>
    )
}
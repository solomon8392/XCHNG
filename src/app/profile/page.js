import Image from "next/image"
import Link from "next/link"
import "./style.css"
// px-4 max-w-[100%]
export default function profilepage() {
    return(
        <section className="bg-[#F1F1F1] w-full h-screen px-4">
   <div className="">
   <div className="">
      <h1 className="text-[24px] text-[#146B48] font-Figtree font-600"> Connect wallet</h1>
      <p className="text-[14px] py-1 font-400 font-Figtree text-[#5A5A58]">Your crypto wallet securely stores your <br /> digital and crypto currencies. </p>
    </div>
    <div className="flex justify-center py-6">
      <div className="grid justify-center items-center gap-[20px]">
        <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
          <Image src={require("../../../assets/Metamask.png")} className="h-9 w-9" />
            <h2 className="text-[16px] font-Figtree">Metamask</h2>
        </div>
        <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
          <Image src={require("../../../assets/TrustWallet.png")} className="h-9 w-9" />
            <h2 className="text-[16px] font-Figtree">TrustWallet</h2>
        </div>
        <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
          <Image src={require("../../../assets/Rainbow.png")} className="h-9 w-9" />
            <h2 className="text-[16px] font-Figtree">Rainbow</h2>
        </div>
        <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
          <Image src={require("../../../assets/Phantom.png")} className="h-9 w-9" />
            <h2 className="text-[16px] font-Figtree">Phantom</h2>
        </div>
        <Link href={{pathname: "/details"}}>
          <button className="w-[50vh] h-[8vh] absolute bottom-3 border-[1px] border-[#146B48] text-[#146B48] text-[16px] font-Figtree rounded-[8px]">Skip</button>
        </Link>
      </div>
    </div>
   </div>   
   </section>
    )
}
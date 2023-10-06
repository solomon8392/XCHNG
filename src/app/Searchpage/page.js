import Image from "next/image";
import Bottomnavpage from "@/app/components/bottom-nav";

export default function Searchpage() {
  return (
    <section className="bg-[#F1F1F1] h-full w-full">
      <div className="px-4 py-2">
        <h1 className="text-[24px] text-[#080705] font-Figtree">Search</h1>
        <div className="py-2">
          <input
            placeholder="Search NFTs"
            className="w-[51vh] border-[1px] border-[#5A5A58] text-[#5A5A58] text-[14px] font-Figtree px-4 h-[8vh] rounded-[8px] outline-none"
          />
        </div>
        <div className="py-3">
          <h1 className="text-[18px] text-[#080705] font-Figtree">
            Categories
          </h1>
          <div className="py-3">
            <div className="relative">
              <Image
                className="bg-[#141419]  w-[168px] rounded-[8px] h-[144px]"
                src={require("../../../assets/photonft.png")}
              />
              <div className="left-[35px] absolute bottom-[35px]">
                <h1 className="text-[#FFF] font-Figtree font-[18px]">
                  Photography
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-[18px] text-[#080705] font-Figtree">
            Popular Searches
          </h1>

          <div className="grid grid-cols-2 justify-items-center items-center gap-3">
            <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
              <Image
                src={require("../../../assets/NFT2.png")}
                className="w-[130px]"
              />
              <div className="grid">
                <span className="text-[#080705] text-[14px] font-Figtree">
                  #4402
                </span>
                <span className="text-[#5A5A58] text-[12px] font-Figtree">
                  74.85 ETH
                </span>
              </div>
            </div>
            <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
              <Image
                src={require("../../../assets/NFT2.png")}
                className="w-[130px]"
              />
              <div className="grid">
                <span className="text-[#080705] text-[14px] font-Figtree">
                  #4402
                </span>
                <span className="text-[#5A5A58] text-[12px] font-Figtree">
                  74.85 ETH
                </span>
              </div>
            </div>
            <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
              <Image
                src={require("../../../assets/NFT2.png")}
                className="w-[130px]"
              />
              <div className="grid">
                <span className="text-[#080705] text-[14px] font-Figtree">
                  #4402
                </span>
                <span className="text-[#5A5A58] text-[12px] font-Figtree">
                  74.85 ETH
                </span>
              </div>
            </div>
            <div className="grid justify-center items-center bg-[#FFFFFF] w-[143px] h-[175px] rounded-[4px]">
              <Image
                src={require("../../../assets/NFT2.png")}
                className="w-[130px]"
              />
              <div className="grid">
                <span className="text-[#080705] text-[14px] font-Figtree">
                  #4402
                </span>
                <span className="text-[#5A5A58] text-[12px] font-Figtree">
                  74.85 ETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottomnavpage />
    </section>
  );
}

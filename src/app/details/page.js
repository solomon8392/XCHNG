import Image from "next/image";
import Link from "next/link";

export default function detailpage() {
  return (
    <section className="bg-[#F1F1F1] h-full w-full px-4">
      <div className="py-4  gap-9">
        <div className="flex gap-[14px] items-center">
          <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
            <Image src={require("../../../assets/arrow.png")} className="h-4" />
          </div>
          <h1 className="text-[17px] font-Figtree font-bold">Kanpai Panda</h1>
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
              <Image src={require("../../../assets/Rounded.png")} />
              <h2 className="text-[14px]">1.2K</h2>
            </div>
          </div>
          <p className="text-[#5A5A58] text-[12px] py-4 font-Figtree">
            Kanpai Pandas is a collection of 10,000 randomly <br />
            generated and stylistically curated hand-drawn NFTs <br />
            that exist on the Ethereum, Binance, Polygon, Avalanche, <br />
            Fantom, Arbitrum, and Optimism chains
          </p>
        </div>
        <div>
          <h1 className="text-[16px] font-Figtree text-[#5A5A58]">Current Price</h1>
          <div className="grid py-2 gap-[4px]">
            <strong className="text-[18px] text-[#080705] font-Figtree">1.89 ETH</strong>
            <span className="text-[14px] font-Figtree text-[#080705]">3,284.73 USD</span>
          </div>
        </div>

        <div className="">
        <h1 className="text-[18px] font-Figtree text-[#080705] py-3 font-bold">Offers</h1>
        <div className="justify-center items-center gap-2 grid">
          <div className="flex items-center gap-[10px] bg-[#FFFFFF] px-2 rounded-[8px] w-[50vh] h-[12vh]">
            <Image
              src={require("../../../assets/NFT1.png")}
              className="w-9 h-9"
            />
            <div className="">
              <h1 className="text-[16px] font-Figtree text-[#080705] font-bold">Save</h1>
              <h3 className="text-[12px] font-Figtree text-[#5A5A58]">6.10 ETH and 4 assets</h3>
            </div>
          </div>
          <div className="flex items-center gap-[10px] bg-[#FFFFFF] px-2 rounded-[8px] w-[50vh] h-[12vh]">
            <Image
              src={require("../../../assets/NFT1.png")}
              className="w-9 h-9"
            />
            <div className="">
              <h1 className="text-[16px] font-Figtree text-[#080705] font-bold">Save</h1>
              <h3 className="text-[12px] font-Figtree text-[#5A5A58]">6.10 ETH and 4 assets</h3>
            </div>
          </div>
          <div className="flex items-center gap-[10px] bg-[#FFFFFF] px-2 rounded-[8px] w-[50vh] h-[12vh]">
            <Image
              src={require("../../../assets/NFT1.png")}
              className="w-9 h-9"
            />
            <div className="">
              <h1 className="text-[16px] font-Figtree text-[#080705] font-bold">Save</h1>
              <h3 className="text-[12px] font-Figtree text-[#5A5A58]">6.10 ETH and 4 assets</h3>
            </div>
          </div>
        </div>
      <Link href={{pathname: "/Offerpage"}} className="flex justify-center py-5">
      <button className="w-[50vh] h-[9vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">Make an offer</button>
      </Link>
      </div>
      </div>


    </section>
  );
}

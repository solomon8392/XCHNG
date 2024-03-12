import Image from "next/image";
import Link from "next/link";

export default function Transactionpage() {
  return (
    <section className="px-4 bg-[#F1F1F1] h-full py-4 w-full">
      <div className="flex gap-[14px] items-center">
        <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
          <Image src={require("../../../assets/arrow.png")} className="h-4" />
        </div>
        <h1 className="text-[24px] font-medium font-Figtree">Send Asset</h1>
      </div>
      <div className="flex justify-center w-full py-9">
        <div className="flex justify-center bg-[#FFFFFF] rounded-[16px] w-[50vh] h-[79vh] items-center">
          <div className="w-[47vh] grid">
            <h1 className="text-[16px] text-[#080705] font-Figtree font-medium">
              Your are sending
            </h1>
            <div className="grid justify-center items-center py-4">
              <Image
                src={require("../../../assets/NFT2.png")}
                className="w-[150px]"
              />
              <div className="grid">
                <span className="text-[#080705] text-[14px] font-Figtree">
                  Kawamii #773
                </span>
                <span className="text-[#5A5A58] text-[12px] font-Figtree">
                  0.0699 ETH
                </span>
              </div>
            </div>
            <div className="grid">
              <span className="text-[18px] text-[#080705] font-Figtree font-semibold">
                Kawamii #773                                                              
              </span>
              <span className="text-[18px] text-[#080705] font-Figtree font-semibold">
                0.25 ETH
              </span>
              <div className="grid gap-[3vh] py-4">
                <div className="flex justify-between border-b-[1px] border-[#6A6A76] ">
                  <span className="text-[#5A5A58] text-[16px] font-Figtree">
                    From 
                  </span>
                  <span className="text-[#080705] text-[16px] font-Figtree">
                    wgqe...QWIRFKJJPOEF
                  </span>
                </div>
                <div className="flex justify-between border-b-[1px] bottom-9 border-[#6A6A76]">
                  <span className="text-[#5A5A58] text-[16px] font-Figtree">
                    To
                  </span>
                  <span className="text-[#080705] text-[16px] font-Figtree">
                    wgqe...QWIRFKJJPOEF
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5A58] text-[16px] font-Figtree">
                    Network Fee
                  </span>
                  <span className="text-[#080705] text-[16px] font-Figtree">
                    $0.0005
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={{ pathname: "/Success" }}
        className="flex justify-center py-5"
      >
        <button className="w-[50vh] h-[8vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">
          Next
        </button>
      </Link>
    </section>
  );
}

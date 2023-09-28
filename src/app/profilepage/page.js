import Image from "next/image";
// import Link from "next/link"

export default function Transactionpage() {
  return (
    <section className="px-4 bg-[#F1F1F1] h-screen py-4 w-full">
      <div className="">
        <h1 className="text-[24px] text-[#080705] text-Figtree">Profile</h1>
        <div className="flex justify-center">
          <div className="">
            <Image src={require("../../../assets/wallet.png")} />
            <div>
              <h1 className="text-[18px] text-center text-[#080705] font-Figtree">
                Connect with wallet
              </h1>
              <h1 className="text-[14px] items-center text-center font-Figtree text-[#5A5A58]">
                Your crypto wallet securely stores your <br /> digital and
                crypto currencies.{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="grid justify-center items-center gap-[15px]">
            <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
              <Image
                src={require("../../../assets/Metamask.png")}
                className="h-9 w-9"
              />
              <h2 className="text-[16px] font-Figtree">Metamask</h2>
            </div>
            <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
              <Image
                src={require("../../../assets/TrustWallet.png")}
                className="h-9 w-9"
              />
              <h2 className="text-[16px] font-Figtree">TrustWallet</h2>
            </div>
            <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
              <Image
                src={require("../../../assets/Rainbow.png")}
                className="h-9 w-9"
              />
              <h2 className="text-[16px] font-Figtree">Rainbow</h2>
            </div>
            <div className="flex items-center w-[50vh] px-2 gap-[10px] h-[9vh] border-[1px] border-[#5A5A58] rounded-[8px]">
              <Image
                src={require("../../../assets/Phantom.png")}
                className="h-9 w-9"
              />
              <h2 className="text-[16px] font-Figtree">Phantom</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

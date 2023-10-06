import Image from "next/image";
import Link from "next/link";
import Bottomnavpage from "../components/bottom-nav";
export default function addnewpage() {
  return (
    <section className="bg-[#F1F1F1] h-full w-full">
      <div className="px-4 py-2">
        <h1 className="text-[24px] text-[#080705] font-Figtree">Add new</h1>
        <div className="py-2">
          <div className="">
            <input
              placeholder="Name of NFT"
              className="w-[51vh] border-[1px] border-[#5A5A58] text-[#5A5A58] text-[14px] font-Figtree px-4 h-[8vh] rounded-[8px] outline-none"
            />
          </div>
          <div className="py-6">
            <h1 className="text-[18px] text-[#080705] font-Figtree">Upload</h1>
            <div className="py-3">
              <div className="flex justify-items-center items-center bg-[#FFFFFF] w-[100%] h-[30vh]">
                <div className="grid gap-[2vh] justify-items-center items-center w-full">
                  <Image
                    src={require("../../../assets/photo.png")}
                    className=""
                  />
                  <h1 className="text-[12px] text-[#5A5A58] font-Figtree">
                    upload from files
                  </h1>
                </div>
              </div>
              <h1 className="text-[11px] py-2 text-[#080705] font-Figtree">
                JPG, png, and mp4 files should not be larger than 5MB
              </h1>
              <div className="flex justify-center py-6">
                <div className="grid gap-[15px]">
                  <div className="">
                    <input
                      placeholder="Category"
                      className="w-[51vh] text-[#5A5A58] text-[14px] font-Figtree border-[1px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"
                    />
                  </div>
                  <div className="">
                    <input
                      placeholder="Links"
                      className="w-[51vh] text-[#5A5A58] text-[14px] font-Figtree border-[1px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"
                    />
                  </div>
                  <div className="">
                    <input
                      placeholder="Description"
                      className="w-[51vh] text-[#5A5A58] text-[14px] font-Figtree border-[1px] border-[#5A5A58] px-4 h-[9vh] rounded-[8px] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={{ pathname: "/addnew" }}
          className="flex justify-center py-1"
        >
          <button className="w-[51vh] h-[9vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">
            Submit
          </button>
        </Link>
      </div>
      <Bottomnavpage />
    </section>
  );
}

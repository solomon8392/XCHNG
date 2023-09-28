import Image from "next/image";
import Link from "next/link";

export default function Successpage() {
  return (
    <section className="bg-[#F1F1F1] h-screen w-full px-4">
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid">
          <div className="flex justify-center">
            <Image
              src={require("../../../assets/Successful2.png")}
              className="flex justify-center items-center "
            />
          </div>
          <div className="grid items-center text-center justify-center gap-[1vh] py-4">
            <h1 className="text-[18px] text-[#080705] font-semibold font-Figtree">
              Transaction successful
            </h1>
            <h1 className="text-[16px] text-[#5A5A58] font-medium font-Figtree">
              Your assets was sent successfully
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={{ pathname: "/Frame70" }} className="absolute bottom-5">
          <button className="w-[50vh] h-[8vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">
            Go back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}

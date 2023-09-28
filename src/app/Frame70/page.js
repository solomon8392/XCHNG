import Image from "next/image";
import Link from "next/link";

export default function Frame70page() {
  return (
    <section className="">
      <div className="">
        <Image
          src={require("../../../assets/vector.png")}
          className="float-right"
        />
        <div className="flex justify-center items-center w-full">
          <div className="grid">
            <div className="flex justify-center relative top-36">
              <Image
                src={require("../../../assets/Successful1.png")}
                className=""
              />
            </div>
            <div className="flex justify-center w-full">
              <div className="grid absolute bottom-[37vh]">
                <h1 className="text-center text-[18px] text-[#080705] font-Figtree font-semibold">
                  Successful
                </h1>
                <h2 className="text-[16px] text-[#5A5A58] font-Figtree font-medium">
                  Your offer was sent successfully
                </h2>
              </div>
              <Link
                href={{ pathname: "/Home" }}
                className="absolute bottom-[25%]"
              >
                <button className="w-[50vh] h-[8vh] text-[#FFFFFF] font-Figtree text-[16px] rounded-[8px] bg-[#146B48]">
                  Go back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

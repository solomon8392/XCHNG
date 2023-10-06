import Image from "next/image";
import Link from "next/link";

export default function Notificationpage() {
  return (
    <section className="bg-[#F1F1F1] h-full w-full px-4">
      <div className="py-4  gap-9">
        <div className="flex gap-[14px] items-center">
          <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
            <Link href={{ pathname: "/Offerpage" }}>
              <Image
                src={require("../../../assets/arrow.png")}
                className="h-4"
              />
            </Link>
          </div>
          <h1 className="text-[24px] font-Figtree font-bold">Notifications</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid py-7 gap-[13px]">
            <Link href={{ pathname: "/offer" }}>
              <div className="bg-[#FFFFFF] w-[51vh] grid rounded-[8px] h-[16vh] justify-center items-center">
                <h1 className="text-[15px] text-[#146B48] font-Figtree">
                  Offer accepted
                </h1>
                <p className="text-[12px] text-[#5A5A58] font-Figtree">
                  Your offer for Kanpai Panda made to Gwills have <br /> been
                  accepted, Go ahead and send....
                </p>
              </div>
            </Link>
            <div className="bg-[#FFFFFF] w-[51vh] grid rounded-[8px] h-[16vh] justify-center items-center">
              <h1 className="text-[15px] text-[#AB0000] font-Figtree">
                Offer declined
              </h1>
              <h2 className="text-[12px] text-[#5A5A58] font-Figtree">
                Your offer for Kanpai Panda made to Gwills have <br /> been
                accepted, Go ahead and send....
              </h2>
            </div>
            <div className="bg-[#FFFFFF] w-[51vh] grid rounded-[8px] h-[16vh] justify-center items-center">
              <h1 className="text-[15px] text-[#146B48] font-Figtree">
                Offer accepted
              </h1>
              <p className="text-[12px] text-[#5A5A58] font-Figtree">
                Your offer for Kanpai Panda made to Gwills have <br /> been
                accepted, Go ahead and send....
              </p>
            </div>
            <div className="bg-[#FFFFFF] w-[51vh] grid rounded-[8px] h-[16vh] justify-center items-center">
              <h1 className="text-[15px] text-[#AB0000] font-Figtree">
                Offer declined
              </h1>
              <p className="text-[12px] text-[#5A5A58] font-Figtree">
                Your offer for Kanpai Panda made to Gwills have <br /> been
                accepted, Go ahead and send....
              </p>
            </div>
            <div className="bg-[#FFFFFF] w-[51vh] grid rounded-[8px] h-[16vh] justify-center items-center">
              <h1 className="text-[15px] text-[#146B48] font-Figtree">
                Offer accepted
              </h1>
              <p className="text-[12px] text-[#5A5A58] font-Figtree">
                Your offer for Kanpai Panda made to Gwills have <br /> been
                accepted, Go ahead and send....
              </p>
            </div>
            <div className="bg-[#FFFFFF] w-[51vh] grid rounded-[8px] h-[16vh] justify-center items-center">
              <h1 className="text-[15px] text-[#AB0000] font-Figtree">
                Offer declined
              </h1>
              <p className="text-[12px] text-[#5A5A58] font-Figtree">
                Your offer for Kanpai Panda made to Gwills have <br /> been
                accepted, Go ahead and send....
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

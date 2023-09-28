import Image from "next/image";
import "./style.css";

export default function Homepage() {
  return (
    <section className="">
      <div className="container">
        <div className="item flex justify-center items-center bg-[#FFFFFF] w-[3000px] h-[316px] rounded-[8px]">
          <div className="">
            <Image
              src={require("../../../assets/Panda.png")}
              className="w-[269px] rounded-[5px]"
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
       
        <div className="item flex justify-center items-center bg-[#FFFFFF] w-[300px] h-[316px] rounded-[8px]">
          <div className="">
            <Image
              src={require("../../../assets/Panda.png")}
              className="w-[269px] rounded-[5px]"
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
        <div className="item flex justify-center items-center bg-[#FFFFFF] w-[300px] h-[316px] rounded-[8px]">
          <div className="">
            <Image
              src={require("../../../assets/Panda.png")}
              className="w-[269px] rounded-[5px]"
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
    </section>
  );
}

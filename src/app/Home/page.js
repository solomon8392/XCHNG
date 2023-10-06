"use client";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import Bottomnavpage from "@/app/components/bottom-nav";

function Homepage() {
  return (
    <section className="bg-[#F1F1F1] h-full w-full">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[#146B48] font-Figtree text-[24px]">
            Discover new <br /> NFT Collection
          </h1>
          <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
            <Link href={{ pathname: "/Notification" }}>
              <Image
                src={require("../../../assets/notification.png")}
                className=""
              />
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="text-[#080705] py-2 text-[18px] font-Figtree font-semibold">
            Trending
          </h1>
          <div className="flex justify-center py-4">
            <div className="item flex justify-center items-center bg-[#FFFFFF] w-[300px] h-[316px] rounded-[8px]">
              <Link href={{ pathname: "/details" }}>
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
              </Link>
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-[18px] font-semibold py-2 text-[#080705] font-Figtree">
              Top Collections
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
      </div>
      <Bottomnavpage />
    </section>
  );
}

export default Homepage;

// {/* <div>
// import React from "react";

// import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

// export default function App() {
//   return (
//     <Dropdown backdrop="blur">
//       <DropdownTrigger>
//         <Button
//           variant="bordered"
//         >
//           Open Menu
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu variant="faded" aria-label="Static Actions">
//         <DropdownItem key="new">New file</DropdownItem>
//         <DropdownItem key="copy">Copy link</DropdownItem>
//         <DropdownItem key="edit">Edit file</DropdownItem>
//         <DropdownItem key="delete" className="text-danger" color="danger">
//           Delete file
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
// </div> */}

{
  /* <div>import React from "react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}</div> */
}

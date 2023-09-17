import Image from "next/image"

export default function Profile() {
    return(
    //     <section className="container">
    //     <div className="../">
    //     <Image
    //             src={require("../../assets/bg.png")}
    //             className="w-full h-[501px] overflow-hidden"
    //             />
    //             <div className="flex justify-center">
    //                 <div className="grid absolute bottom-[3%] bg-white w-[378px] rounded-[9px] h-[264px]">
    //                   <h1 className="flex justify-center text-[24px] font-Figtree font-600 text-[#080705] py-5">Uncover and Exchange <br /> Incredible New NFTs</h1>
    //                   <h5 className="flex justify-center text-[14px] font-Figtree font-400 text-center text-[#5A5A58]">Find NFT of your choice and swap with <br /> your existing NFT</h5>
    //                       <div className="flex justify-center">
    //                       <div className="bg-[#146B48] flex justify-center text-center w-[315px] h-[48px] rounded-[8px]">
    //                   <button className="text-[16px] text-[#FFFFFF]">Get started</button>
    //                       </div>
    //                       </div>
    //                 </div>
    //             </div>
    //     </div>
    // </section>

    <section className="px-4">
    <div className="">
      <h1 className="text-[24px] text-[#146B48] font-Figtree font-600"> Connect wallet</h1>
      <p className="text-[14px] font-400 font-Figtree text-[#5A5A58]">Your crypto wallet securely stores your <br /> digital and crypto currencies. </p>
    </div>
   <div className="flex justify-center py-9">
    <div className="grid gap-3">
   <div className="flex  items-center gap-5 w-[358px] h-[56px] border-[1px] rounded-[8px] px-2 border-[#5A5A58]">
   <Image src={require("../../assets/Metamask.png")} className=""/>
    <h1 className="text-[16px] font-400 font-Figtree">Metamask</h1>
    </div>
   <div className="flex  items-center gap-5 w-[358px] h-[56px] border-[1px] rounded-[8px] px-2 border-[#5A5A58]">
   <Image src={require("../../assets/TrustWallet.png")} className=""/>
    <h1 className="text-[16px] font-400 font-Figtree">Metamask</h1>
    </div>
   <div className="flex  items-center gap-5 w-[358px] h-[56px] border-[1px] rounded-[8px] px-2 border-[#5A5A58]">
   <Image src={require("../../assets/Rainbow.png")} className=""/>
    <h1 className="text-[16px] font-400 font-Figtree">Metamask</h1>
    </div>
   <div className="flex  items-center gap-5 w-[358px] h-[56px] border-[1px] rounded-[8px] px-2 border-[#5A5A58]">
   <Image src={require("../../assets/phantom.png")} className=""/>
    <h1 className="text-[16px] font-400 font-Figtree">Metamask</h1>
    </div>
   </div>
   </div>
    <div className="m-b-0 border-[1px] items-center rounded-[8px] w-[Fixed (358px)] h-[48px] border-[#146B48] flex justify-center">
    <button className="text-[#146B48] text-[16px] font-Figtree">Skip</button>
    </div>
   </section>
    )
}


// import Image from "next/image";
// import Link from 'next/link';


// export default function Home() {
//   return (
    
//     <section className="grid bg-[#F1F1F1] absolute w-full h-screen">
//       <div className="flex px-4 gap-[50%] items-center">
//         <h1 className="text-[24px] font-Figtree font-medium text-[#146B48]">Discover new <br /> NFT Collection</h1>
//         <div className="w-9 h-9 rounded-full bg-[#D0E1DA] flex justify-center items-center">
//         <Image src={require("../../assets/notification.png")} className="h-5"
//          />
//         </div>
//       </div>
//       <div className="">
//         <h1 className="text-[18px] font-bold text-[#080705]">Trending</h1>
//         <div className="wrapper">
//         <div className="item flex justify-center items-center bg-[#FFFFFF] w-[320px] h-[376px] rounded-[8px]">
//               <div className="">
//                 <Image src={require ("../../assets/Panda.png")} className="w-[288px] h-[288px] rounded-[8px]" />
//                 <div className="">
//                     <li className="list-none">
//                       <div className="flex gap-[19%]">
//                         <strong>Kanpai Panda</strong>
//                         <span>3,284.73 USD</span>
//                       </div>
//                       <div className="flex gap-[19%]">
//                         <span className="flex items-center">Kanpai Pandas
//                           <Image src={require("../../assets/verify.png")} className="h-3" />
//                         </span>
//                         <strong>1.89 ETH</strong>
//                       </div>

//                     </li>
//                 </div>
//               </div>
//         </div>
        // <div className="item flex justify-center items-center bg-[#FFFFFF] w-[320px] h-[376px] rounded-[8px]">
        //       <div className="">
        //         <Image src={require ("../../assets/Panda.png")} className="w-[288px] h-[288px] rounded-[8px]" />
        //         <div className="">
        //             <li className="list-none">
        //               <div className="flex gap-[19%]">
        //                 <strong>Kanpai Panda</strong>
        //                 <span>3,284.73 USD</span>
        //               </div>
        //               <div className="flex gap-[19%]">
        //                 <span className="flex items-center">Kanpai Pandas
        //                   <Image src={require("../../assets/verify.png")} className="h-3" />
        //                 </span>
        //                 <strong>1.89 ETH</strong>
        //               </div>

        //             </li>
        //         </div>
        //       </div>
        // </div>
//         <div className="item flex justify-center items-center bg-[#FFFFFF] w-[320px] h-[376px] rounded-[8px]">
//               <div className="">
//                 <Image src={require ("../../assets/Panda.png")} className="w-[288px] h-[288px] rounded-[8px]" />
//                 <div className="">
//                     <li className="list-none">
//                       <div className="flex gap-[19%]">
//                         <strong>Kanpai Panda</strong>
//                         <span>3,284.73 USD</span>
//                       </div>
//                       <div className="flex gap-[19%]">
//                         <span className="flex items-center">Kanpai Pandas
//                           <Image src={require("../../assets/verify.png")} className="h-3" />
//                         </span>
//                         <strong>1.89 ETH</strong>
//                       </div>

//                     </li>
//                 </div>
//               </div>
//         </div>
//         <div className="item flex justify-center items-center bg-[#FFFFFF] w-[320px] h-[376px] rounded-[8px]">
//               <div className="">
//                 <Image src={require ("../../assets/Panda.png")} className="w-[288px] h-[288px] rounded-[8px]" />
//                 <div className="">
//                     <li className="list-none">
//                       <div className="flex gap-[19%]">
//                         <strong>Kanpai Panda</strong>
//                         <span>3,284.73 USD</span>
//                       </div>
//                       <div className="flex gap-[19%]">
//                         <span className="flex items-center">Kanpai Pandas
//                           <Image src={require("../../assets/verify.png")} className="h-3" />
//                         </span>
//                         <strong>1.89 ETH</strong>
//                       </div>

//                     </li>
//                 </div>
//               </div>
//         </div>
//         <div className="item flex justify-center items-center bg-[#FFFFFF] w-[320px] h-[376px] rounded-[8px]">
//               <div className="">
//                 <Image src={require ("../../assets/Panda.png")} className="w-[288px] h-[288px] rounded-[8px]" />
//                 <div className="">
//                     <li className="list-none">
//                       <div className="flex gap-[19%]">
//                         <strong>Kanpai Panda</strong>
//                         <span>3,284.73 USD</span>
//                       </div>
//                       <div className="flex gap-[19%]">
//                         <span className="flex items-center">Kanpai Pandas
//                           <Image src={require("../../assets/verify.png")} className="h-3" />
//                         </span>
//                         <strong>1.89 ETH</strong>
//                       </div>

//                     </li>
//                 </div>
//               </div>
//         </div>
//         <div className="item flex justify-center items-center bg-[#FFFFFF] w-[320px] h-[376px] rounded-[8px]">
//               <div className="">
//                 <Image src={require ("../../assets/Panda.png")} className="w-[288px] h-[288px] rounded-[8px]" />
//                 <div className="">
//                     <li className="list-none">
//                       <div className="flex gap-[19%]">
//                         <strong>Kanpai Panda</strong>
//                         <span>3,284.73 USD</span>
//                       </div>
//                       <div className="flex gap-[19%]">
//                         <span className="flex items-center">Kanpai Pandas
//                           <Image src={require("../../assets/verify.png")} className="h-3" />
//                         </span>
//                         <strong>1.89 ETH</strong>
//                       </div>

//                     </li>
//                 </div>
//               </div>
//         </div>
//         </div>
//       </div>
//    </section>
//   )
// }


// how to do a horizontal list view in nextjs and tailwind
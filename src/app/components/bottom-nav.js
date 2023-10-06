import Image from "next/image";
import Link from "next/link";

export default function Bottomnavpage() {
  return (
    <section className="flex items-center justify-between h-[69px] px-4 bg-[#FFFFFF]">
      <Link href={{ pathname: "/Home" }}>
        <Image src={require("../../../assets/home.png")} />
      </Link>
      <Link className="" href={{ pathname: "/addnew" }}>
        <Image src={require("../../../assets/plus.png")} />
      </Link>
      <Link className="" href={{ pathname: "/Searchpage" }}>
        <Image src={require("../../../assets/search.png")} />
      </Link>
      <Link className="a" href={{ pathname: "/profilepage" }}>
        <Image src={require("../../../assets/profile.png")} />
      </Link>
    </section>
  );
}

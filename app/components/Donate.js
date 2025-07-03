// components/Donate.js
import Link from "next/link";

export default function Donate() {
  return (
    <Link href="/donate">
      <button className="bg-white text-black font-bold py-3 px-6 rounded-full text-sm md:text-base whitespace-nowrap hover:bg-opacity-90 transition-all">
        DONATE NOW
      </button>
    </Link>
  );
}

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-gray-950 text-white py-8 mb-8">
      <ul className="flex gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact us</Link>
        </li>
        <li>
          <Link href={"/countries"}>Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

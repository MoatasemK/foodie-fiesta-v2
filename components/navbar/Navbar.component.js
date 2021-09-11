import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between shadow-md">
      <h2 className="text-3xl p-3 text-green-500 font-bold ">Logo</h2>
      <div className="flex items-center px-3">
        <Link href="">
          <p className="text-green-500 hover:text-green-600  text-lg px-3 cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/auth">
          <p className="text-green-500 hover:text-green-600 text-lg px-3 cursor-pointer">
            Sign Up
          </p>
        </Link>

        <Link href="">
          <Image
            src="/images.png"
            className="rounded-full"
            height="35"
            width="35"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

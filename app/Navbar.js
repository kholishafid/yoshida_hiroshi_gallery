import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200/60 py-6 px-8 sticky top-0 z-50">
      <Link href={"/"} className="normal-case text-xl font-semibold">
        Yoshida Hiroshi 吉田 博 - Gallery
      </Link>
    </div>
  );
};

export default Navbar;

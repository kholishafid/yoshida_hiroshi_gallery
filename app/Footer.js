import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-base-100/50 h-20 px-8 z-50">
      <div>
        <Link href={"gallery/1"} className="underline">
          Gallery
        </Link>{" "}
        -{" "}
        <Link href={"about/hiroshi"} className="underline">
          About Hiroshi
        </Link>
      </div>
      <div className="group">
        <p className="flex">
          <span className="group-hover:block hidden mr-1">
            All artwork data and image are collected from
          </span>
          <a href="https://api.artic.edu/docs/" className="underline">
            <span className="group-hover:hidden">🛈</span> The Art Institute of
            Chicago API
          </a>
        </p>
      </div>
    </footer>
  );
}

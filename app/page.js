import Link from "next/link";

const Landing = () => {
  return (
    <section className="flex-1 grid place-items-center">
      <div className="grid">
        <h2 className="text-4xl font-semibold mb-5">
          Wellcome to Hiroshi Yoshida Art Gallery
        </h2>
        <div className="mx-auto flex gap-2">
          <Link href={"/gallery/1"} className="btn  btn-outline">
            <button>Start Exploring</button>
          </Link>
          <Link href={"/about/hiroshi"} className="btn  btn-outline">
            <button>About Hiroshi Yoshida</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;

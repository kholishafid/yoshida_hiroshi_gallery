import Link from "next/link";

const Landing = () => {
  return (
    <main>
      <h2>Wellcome to Hiroshi Yoshida Art Gallery</h2>
      <Link href={"/gallery"}>
        <button>Start Exploring</button>
      </Link>
    </main>
  );
};

export default Landing;

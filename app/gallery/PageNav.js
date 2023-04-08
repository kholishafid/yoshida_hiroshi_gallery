import Link from "next/link";

const PageNav = ({ pagination, fetchR, page }) => {
  return (
    <section className="mt-8 p-2">
      <div className="gap-1 flex justify-center">
        {[...Array(4)].map((v, i) => {
          return (
            <Link
              href={`/gallery/${i + 1}`}
              key={i}
              className={`px-4 py-2 border border-accent btn-outline rounded-none ${
                i + 1 == page ? "btn-active" : ""
              }`}
            >
              {i + 1}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PageNav;

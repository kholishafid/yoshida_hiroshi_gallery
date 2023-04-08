import { notFound } from "next/navigation";
import Card from "../Card";
import PageNav from "../PageNav";

export async function fetchResources(page) {
  const indexPage = page ? page : 1;
  const res = await fetch(`${process.env.ARTWORK_ENDPOINT}${indexPage}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Gallery({ params }) {
  const { data, pagination, config } = await fetchResources(params.page).catch(
    (res) => {
      notFound();
    }
  );

  if (!data) {
    return (
      <section className="flex-1 grid place-items-center">
        <div>
          <img
            src="/spinner.svg"
            alt="spinner"
            className="animate-spin mb-1 mx-auto"
          />
          <p>Loading</p>
        </div>
      </section>
    );
  }

  return (
    <main>
      <ul className="flex flex-wrap gap-8 justify-center">
        {data.map((artwork) => {
          return (
            <li key={artwork.id}>
              <Card artwork={artwork} iiifUrl={config.iiif_url} />
            </li>
          );
        })}
      </ul>
      <PageNav
        pagination={pagination}
        fetchR={fetchResources}
        page={params.page}
      />
    </main>
  );
}

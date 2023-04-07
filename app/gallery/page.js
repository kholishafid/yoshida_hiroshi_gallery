import Card from "./Card";
import PageNav from "./PageNav";

async function fetchArtWork() {
  const res = await fetch(
    "https://api.artic.edu/api/v1/artworks/search?q=Yoshida%20Hiroshi%20Japanese,%201876-1950&fields=id,title,artist_display,date_display,main_reference_number,image_id&limit=15"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Gallery() {
  const { data, config, pagination } = await fetchArtWork();
  return (
    <main>
      <ul className="flex flex-wrap gap-8 justify-center">
        {data.map((artwork) => {
          return (
            <li className="">
              <Card artwork={artwork} iiifUrl={config.iiif_url} />
            </li>
          );
        })}
      </ul>
      <PageNav pagination={pagination} />
    </main>
  );
}

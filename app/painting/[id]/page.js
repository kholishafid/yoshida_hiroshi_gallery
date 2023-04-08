import { notFound } from "next/navigation";

export async function fethcManifest(id) {
  const manifest = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}/manifest.json`
  ).then((manifest) => manifest.json());

  const artwork = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}`
  ).then((artwork) => artwork.json());

  return {
    label: manifest.label,
    description: manifest.description,
    metadata: manifest.metadata,
    attribution: manifest.attribution,
    image: {
      image_id: artwork.data.image_id,
      url: artwork.config.iiif_url,
      date: artwork.data.date_display,
    },
  };
}

export default async function Painting({ params }) {
  const { label, description, metadata, attribution, image } =
    await fethcManifest(params.id).catch((er) => {
      notFound();
    });

  return (
    <section className="max-w-4xl mx-auto">
      <div className="p-2 border rounded w-fit mx-auto">
        <img
          src={`${image.url}/${image.image_id}/full/,450/0/default.jpg`}
          alt={label}
          className="w-full pointer-events-none"
          draggable="false"
        />
      </div>
      <div className="mt-8 mb-10">
        <h1 className="font-semibold text-3xl mb-2 text-center leading-relaxed">
          {label}
        </h1>
        <p className="text-center text-xl">{image.date}</p>
      </div>
      <p>{description[0].value}</p>
      <ul>
        {metadata.map((meta, index) => {
          if (meta.label == "Collection") {
            return null;
          }

          return (
            <li className="my-6 border-b border-base-300 py-2" key={index}>
              {meta.label} : {meta.value}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

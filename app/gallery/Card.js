import Link from "next/link";

const Card = ({ artwork, iiifUrl }) => {
  if (!artwork.image_id) {
    return null;
  }

  return (
    <Link href={`/painting/${artwork.id}`} className="relative group">
      <div className="group-hover:scale-[1.01] transition-all">
        <img
          src={`${iiifUrl}/${artwork.image_id}/full/,300/0/default.jpg`}
          alt="Album"
          className="w-full h-full pointer-events-none"
          draggable="false"
        />
        <div className="absolute bottom-0 py-2 px-4 bg-accent/60 text-white font-semibold hidden group-hover:block">
          <p className="cursor-pointer">{artwork.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

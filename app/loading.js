export default function Loading() {
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

import Image from "next/image";

export default function AboutHiroshi() {
  return (
    <section className="flex-1 grid place-items-center  ">
      <div className="flex flex-col items-center text-center max-w-4xl leading-8">
        <Image
          src="/Portrait_of_Yoshida_Hiroshi.jpg"
          alt="portait of hiroshi"
          width={104}
          height={161}
          draggable="false"
          className="mb-8"
        />
        <p className="mb-4">
          Hiroshi Yoshida (吉田 博, Yoshida Hiroshi, September 19, 1876 – April
          5, 1950) was a 20th-century Japanese painter and woodblock printmaker.
          He is regarded as one of the greatest artists of the shin-hanga style,
          and is noted especially for his excellent landscape prints. Yoshida
          travelled widely, and was particularly known for his images of
          non-Japanese subjects done in traditional Japanese woodblock style.
        </p>
        <p className="mb-4">
          Hiroshi Yoshida was trained in the Western oil painting tradition,
          which was adopted in Japan during the Meiji period.
        </p>
        <p>
          Source :{" "}
          <a
            className="text-blue-800 underline"
            href="https://en.wikipedia.org/wiki/Hiroshi_Yoshida"
          >
            Wikipedia
          </a>
        </p>
      </div>
    </section>
  );
}

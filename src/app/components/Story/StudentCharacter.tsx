import Image from "next/image";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export function StudentCharacter({ hero = false }: { hero?: boolean }) {
  return (
    <figure
      className={`student-scene ${hero ? "student-hero" : "student-return"}`}
    >
      <picture>
        <source
          media="(max-width: 700px)"
          srcSet={`${base}/images/story/student-480.webp`}
        />
        <Image
          src={`${base}/images/story/student-${hero ? 840 : 480}.webp`}
          alt="Illustrated teenage student in a blue hoodie, thinking over his science notebook."
          width={hero ? 840 : 480}
          height={hero ? 1120 : 640}
          priority={hero}
          sizes={hero ? "(max-width: 700px) 90vw, 44vw" : "220px"}
        />
      </picture>
      {hero && (
        <div className="notebook-note" aria-hidden="true">
          <span>A new chapter.</span>
          <strong>A thousand possibilities.</strong>
          <svg viewBox="0 0 100 30">
            <path d="M2 16Q45 0 90 17M80 7L92 17L78 24" />
          </svg>
        </div>
      )}
      <figcaption>
        {hero
          ? "An illustrated student journey. Yours will be your own."
          : "The same curiosity. A wider world of possibilities."}
      </figcaption>
    </figure>
  );
}

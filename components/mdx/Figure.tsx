import Image from "next/image";

export default function Figure({
  src,
  alt,
  captionTitle,
  captionBody,
  width = 640,
  height = 640,
}: {
  src: string;
  alt: string;
  captionTitle?: string;
  captionBody?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="!mt-10 !mb-10 flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 640px) 640px, 100vw"
        className="w-full max-w-[640px] rounded-sm border border-paper-line"
      />
      {captionTitle || captionBody ? (
        <figcaption className="mt-3 max-w-[640px] text-center text-sm text-ink-faint">
          {captionTitle ? (
            <span className="block font-semibold text-ink-muted italic">
              {captionTitle}
            </span>
          ) : null}
          {captionBody ? (
            <span className="mt-1 block italic">{captionBody}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

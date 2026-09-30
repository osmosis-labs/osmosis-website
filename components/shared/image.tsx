import type { ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Load eagerly with high fetch priority (above-the-fold images). */
  priority?: boolean;
};

/**
 * Plain <img> with the same call-site API the components used with next/image.
 * Assets are served as-is: most are SVGs and the raster ones are pre-sized.
 */
export default function Image({
  priority,
  loading,
  decoding = "async",
  ...props
}: ImageProps) {
  return (
    <img
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : undefined}
      decoding={decoding}
      {...props}
    />
  );
}

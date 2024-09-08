import cn from "classnames";
import Link from "next/link";
import Image from 'next/image';
import { ImageLoader } from '../lib/image-loader';

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
    loader={ImageLoader}
      width={2000}
      height={1000}
      alt={coverImage?.node.altText}
      src={coverImage?.node.sourceUrl}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

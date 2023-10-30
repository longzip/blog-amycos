import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import { useState, useEffect } from "react";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  slug,
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Đăng <Date dateString={date} />
          <Categories categories={categories} />
        </div>
        {isClient ? (
          <>
            <div
              className="zalo-follow-only-button items-center"
              data-oaid="939846860985963068"
            ></div>
            <div
              className="zalo-share-button"
              data-href={`https://blog.amycos.vn/${slug}/`}
              data-oaid="939846860985963068"
              data-layout="1"
              data-color="blue"
              data-customize="false"
            ></div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

"use client";
import { Masonry } from "masonic";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { getProjectSlug } from "../data/projects";

export default function Gallery({
  images,
  projectRef,
}: {
  images: {
    title: string;
    url: string;
  }[];
  projectRef: string;
}) {
  return (
    images.length > 0 && (
      <>
        <h2 className="uppercase font-bold text-xl text-black mt-12 mb-4">
          Project Gallery
        </h2>

        <div
          className={`before:shadow-inner before:max-w-screen-2xl py-6 relative before:-z-10 before:content[""] before:overflow-visible before:absolute before:-left-4 before:top-0 before:h-full before:w-screen before:bg-gradient-to-b before:from-gray-50 before:to-${getProjectSlug(
            projectRef
          )}-gradient`}
        >
          <div>
            <Masonry
              items={images}
              columnGutter={12}
              rowGutter={16}
              columnWidth={300}
              render={({ data }) => (
                <figure className="bg-white p-2 shadow rounded">
                  <img className="" src={data.url} alt={data.title} />
                  <figcaption className="text-sm text-center font-medium pt-2">
                    {data.title}
                  </figcaption>
                </figure>
              )}
            />
          </div>
        </div>
      </>
    )
  );
}

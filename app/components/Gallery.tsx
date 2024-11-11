"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { getProjectSlug } from "@/app/data/projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        <div
          className={`before:shadow-inner relative before:-z-10 before:content[""] before:max-w-screen-2xl before:overflow-visible before:absolute before:-left-4 before:top-0 before:h-full before:w-screen before:bg-gradient-to-b before:from-gray-50 before:to-${getProjectSlug(
            projectRef
          )}-gradient`}
        >
          <Swiper
            slidesPerView={"auto"}
            grabCursor
            loop
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            modules={[Pagination]}
          >
            {images.map((image) => (
              <SwiperSlide key={image.title}>
                <figure className="max-w-fit shadow-lg bg-white p-2">
                  <img className="border" src={image.url} alt={image.title} />
                  <figcaption
                    className="absolute bottom-0 text-center italic font-medium text-sm uppercase w-full"
                    style={{ left: "50%", transform: "translateX(-50%)" }}
                  >
                    {image.title}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  );
}

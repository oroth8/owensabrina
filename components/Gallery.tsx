import Image from "next/legacy/image";
import React from "react";

type GalleyImages = {
  path: string;
  alt: string;
};

type Gallery = [
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages,
  GalleyImages
];

const gallery: Gallery = [
  { path: "/images/gallery/g1.JPG", alt: "Engagement Kiss" },
  { path: "/images/gallery/g2.JPEG", alt: "Cake Cutting" },
  { path: "/images/gallery/g5.JPG", alt: "Coronado Sunset Kiss" }, // full
  { path: "/images/gallery/g4.JPG", alt: "San Diego Concert" }, // full
  { path: "/images/gallery/g3.JPG", alt: "Aqua Wedding Formal" },
  { path: "/images/gallery/g6.JPG", alt: "Botanic Gardens Light Festival" },
  { path: "/images/gallery/g7.JPG", alt: "Aqua Pool" },
  { path: "/images/gallery/g8.JPG", alt: "San Diego Sunset" },
  { path: "/images/gallery/g11.JPG", alt: "San Diego Hike" }, // full
  { path: "/images/gallery/g10.JPG", alt: "Kuai Hike" }, // full
  { path: "/images/gallery/g9.JPG", alt: "North Carolina Engagement" },
  { path: "/images/gallery/g12.JPG", alt: "College Formal" },
  { path: "/images/gallery/g13.JPG", alt: "London Ferris Wheel" },
  { path: "/images/gallery/g14.JPG", alt: "Steamboat ATV" },
  { path: "/images/gallery/g15.JPG", alt: "Coco-head Hike" }, // full
  { path: "/images/gallery/g16.JPG", alt: "Steamboat Spring Ski" }, // full
  { path: "/images/gallery/g17.JPG", alt: "Madison Bar" },
  { path: "/images/gallery/g18.JPG", alt: "New Buffalo" },
  { path: "/images/gallery/g19.jpeg", alt: "Mykonos Little Italy" },
  { path: "/images/gallery/g20.JPG", alt: "Wisconsin Tailgate" },
  { path: "/images/gallery/g23.jpeg", alt: "Telluride Waterfall" }, // full
  { path: "/images/gallery/g21.JPG", alt: "Santorini Village" }, // full
  { path: "/images/gallery/g20.jpeg", alt: "Balcony Proposal" },
  { path: "/images/gallery/g24.jpeg", alt: "Beach Ring Pic" },
];

const Gallery = () => {
  return (
    <>
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[0].path}
              alt={gallery[0].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[1].path}
              alt={gallery[1].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
              priority
            />
          </div>
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[2].path}
              alt={gallery[2].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
              priority
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[3].path}
              alt={gallery[3].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[4].path}
              alt={gallery[4].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[5].path}
              alt={gallery[5].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[6].path}
              alt={gallery[6].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[7].path}
              alt={gallery[7].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[8].path}
              alt={gallery[8].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[9].path}
              alt={gallery[9].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[10].path}
              alt={gallery[10].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[11].path}
              alt={gallery[11].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[12].path}
              alt={gallery[12].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[13].path}
              alt={gallery[13].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[14].path}
              alt={gallery[14].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[15].path}
              alt={gallery[15].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[16].path}
              alt={gallery[16].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[17].path}
              alt={gallery[17].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[18].path}
              alt={gallery[18].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[19].path}
              alt={gallery[19].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[20].path}
              alt={gallery[20].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2">
          <div className="w-full p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[21].path}
              alt={gallery[21].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[22].path}
              alt={gallery[22].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-110">
            <Image
              src={gallery[23].path}
              alt={gallery[23].alt}
              className="rounded-lg"
              height={1300}
              width={1000}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/gallery/operating-room-01.jpg",
    alt: "Лікар проводить ендоваскулярне втручання в рентгенопераційній",
    width: 927,
    height: 999,
  },
  {
    src: "/images/gallery/operating-room-02.jpg",
    alt: "Ангіографічний комплекс у рентгенопераційній перед операцією",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/gallery/operating-room-03.jpg",
    alt: "Лікар в операційній біля монітора ангіографічної системи",
    width: 918,
    height: 1280,
  },
  {
    src: "/images/gallery/operating-room-04.jpg",
    alt: "Лікар готується до операції в операційній",
    width: 938,
    height: 1280,
  },
];

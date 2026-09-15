export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Required attribution for photos under a free license (e.g. CC BY-SA).
  credit?: {
    author: string;
    license: string;
    sourceUrl: string;
  };
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

// Photos from Wikimedia Commons — the license requires crediting the author,
// so the credit is rendered next to the gallery.
export const INSTITUTE_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/institute/institute-01.jpg",
    alt: "Клінічний корпус Інституту нейрохірургії ім. акад. А.П. Ромоданова",
    width: 1280,
    height: 960,
    credit: {
      author: "Oleh Kushch",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Clinical_building_of_Romodanov_Neurosurgery_Institute_(2018-10-12)_01.jpg",
    },
  },
  {
    src: "/images/institute/institute-02.jpg",
    alt: "Алея на території Інституту нейрохірургії",
    width: 1280,
    height: 960,
    credit: {
      author: "Oleh Kushch",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Complex_of_buildings_of_Romodanov_Neurosurgery_Institute_(2018-10-12).jpg",
    },
  },
  {
    src: "/images/institute/institute-03.jpg",
    alt: "Адміністративно-лабораторний корпус Інституту нейрохірургії",
    width: 960,
    height: 1280,
    credit: {
      author: "Investigatio",
      license: "CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Kyiv_Neuro_surgery_research_institute_Administrative_building_Majborody_32.jpg",
    },
  },
  {
    src: "/images/institute/institute-04.jpg",
    alt: "Історичні корпуси Інституту нейрохірургії на вулиці Платона Майбороди",
    width: 954,
    height: 1280,
    credit: {
      author: "Vladyslava Oleksiuk",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%D0%86%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82_%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%85%D1%96%D1%80%D1%83%D1%80%D0%B3%D1%96%D1%97_%D1%96%D0%BC._%D0%90.%D0%9F._%D0%A0%D0%BE%D0%BC%D0%BE%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%CA%BC.jpg",
    },
  },
  {
    src: "/images/institute/institute-05.jpg",
    alt: "Фасад Інституту нейрохірургії, вул. Платона Майбороди, 32",
    width: 1280,
    height: 642,
    credit: {
      author: "Vladyslava Oleksiuk",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%D0%92%D1%83%D0%BB._%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD%D0%B0_%D0%9C%D0%B0%D0%B9%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%B8_32(%D0%9A%D0%B8%D1%97%D0%B2).jpg",
    },
  },
  {
    src: "/images/institute/institute-06.jpg",
    alt: "Вхід до історичного корпусу Інституту нейрохірургії",
    width: 916,
    height: 1280,
    credit: {
      author: "Vladyslava Oleksiuk",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%D0%92%D1%83%D0%BB%D0%B8%D1%86%D1%8F_%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD%D0%B0_%D0%9C%D0%B0%D0%B9%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%B8_32(%D0%9A%D0%B8%D1%97%D0%B2).jpg",
    },
  },
];

export type CasePhoto = {
  src: string;
  alt: string;
};

export type PatientCase = {
  id: string;
  identifier: string;
  ageSex: string;
  diagnosis: string;
  resultSummary: string;
  beforePhotos: CasePhoto[];
  afterPhotos: CasePhoto[];
};

// Порядок "до"/"після" для patient-p та patient-l визначено за хронологією
// імені файлу (раніший таймстемп = до) — тимчасово, до підтвердження лікарем.
// Для patient-v порядок підтверджено візуально (на другому фото видно
// маркери стента вздовж судини).
export const PATIENT_CASES: PatientCase[] = [
  {
    id: "patient-p",
    identifier: "Хвора П.",
    ageSex: "[Вік і стать пацієнта — заготовка]",
    diagnosis:
      "Гострий період субарахноідального крововиливу внаслідок розриву мішковидноі аневризми передньої сполучної артерії. Операція - емболізація аневризми спіралями.",
    resultSummary: "[Короткий підсумок результату лікування — заготовка]",
    beforePhotos: [
      { src: "/images/cases/patient-p-before-01.jpg", alt: "Хвора П. — фото до лікування, 1" },
    ],
    afterPhotos: [
      { src: "/images/cases/patient-p-after-01.jpg", alt: "Хвора П. — фото після лікування, 1" },
    ],
  },
  {
    id: "patient-v",
    identifier: "Хворий В.",
    ageSex: "[Вік і стать пацієнта — заготовка]",
    diagnosis:
      "Переніс ішемічний інсульт внаслідок стенозу вустя хребтовоі артеріі. Виконана операція стентування ділянки стеноза хребтовоі артеріі.",
    resultSummary: "[Короткий підсумок результату лікування — заготовка]",
    beforePhotos: [
      { src: "/images/cases/patient-v-before-01.jpg", alt: "Хворий В. — фото до лікування, 1" },
    ],
    afterPhotos: [
      { src: "/images/cases/patient-v-after-01.jpg", alt: "Хворий В. — фото після лікування, 1" },
    ],
  },
  {
    id: "patient-k",
    identifier: "Хворий К.",
    ageSex: "[Вік і стать пацієнта — заготовка]",
    diagnosis:
      "Після перенесеного ішемічного інсульту. Діагностовано критичний стеноз екстракраніального відділу правої внутрішньої сонної артерії. Проведена ендоваскулярна операція ангіопластика та стентування ділянки стеноза.",
    resultSummary: "[Короткий підсумок результату лікування — заготовка]",
    beforePhotos: [
      { src: "/images/cases/patient-k-before-01.jpg", alt: "Хворий К. — фото до лікування, 1" },
      { src: "/images/cases/patient-k-before-02.jpg", alt: "Хворий К. — фото до лікування, 2" },
    ],
    afterPhotos: [
      { src: "/images/cases/patient-k-after-01.jpg", alt: "Хворий К. — фото після лікування, 1" },
      { src: "/images/cases/patient-k-after-02.jpg", alt: "Хворий К. — фото після лікування, 2" },
    ],
  },
  {
    id: "patient-l",
    identifier: "Хворий Л.",
    ageSex: "[Вік і стать пацієнта — заготовка]",
    diagnosis:
      "Після ішемічного інсульту в басейні правої середньої мозкової артерії (СМА). Діагностовано стеноз ділянки М1 СМА до 80%. Оперований - стентування стеноза СМА.",
    resultSummary: "[Короткий підсумок результату лікування — заготовка]",
    beforePhotos: [
      { src: "/images/cases/patient-l-before-01.jpg", alt: "Хворий Л. — фото до лікування, 1" },
    ],
    afterPhotos: [
      { src: "/images/cases/patient-l-after-01.jpg", alt: "Хворий Л. — фото після лікування, 1" },
    ],
  },
];

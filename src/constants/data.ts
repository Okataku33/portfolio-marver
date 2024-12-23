export interface ScheduleEvent {
  date: string;
  title: string;
  description: string;
}

export const scheduleData: ScheduleEvent[] = [
  {
    date: "2025.5.2",
    title: "アベンジャーズ: カン・ダイナスティ",
    description:
      "ヴィラン「カン・ザ・コンカーラー」が主要な敵として登場しアベンジャーズが新たな戦いに挑む。",
  },
  {
    date: "2025.11.7",
    title: "デッドプール3",
    description:
      "MCUに正式に登場するデッドプールがウルヴァリンと共に新たな冒険に乗り出す。",
  },
  {
    date: "2025.12.19",
    title: "アベンジャーズ: シークレット・ウォーズ",
    description:
      "アベンジャーズが次々と集結し、「シークレット・ウォーズ」と呼ばれる壮大な戦争に突入する。",
  },
];

export const qaData = [
  {
    marvelId: "1",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12450_12452_12450_12531_12510_12531_ad67ee83.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "2",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12461_12515_12503_12486_12531_12539_1245_ebc624ef.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "3",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12473_12497_12452_12480_12540_12510_1253_8a3668c2.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "4",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12477_12540_26955643.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "5",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12495_12523_12463_591740bc.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "6",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12502_12521_12483_12463_12539_12454_1245_7e9fe59c.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "7",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12489_12463_12479_12540_12539_12473_1248_c021937f.jpeg?region=0,0,800,800&width=320",
  },
  {
    marvelId: "8",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/th_avengers-iw_12502_12521_12483_12463_12497_12531_1246_0ded8ee5.jpeg?region=0,0,800,800&width=320",
  },
] as const;

export type TabType = "photos" | "videos" | "tweets";

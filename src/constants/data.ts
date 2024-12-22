export interface ScheduleEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  category?: "live" | "event" | "media";
}

export const scheduleData: ScheduleEvent[] = [
  {
    date: "2024.11.15",
    time: "19:00",
    title: "ライブイベント",
    description: "渋谷O-EAST",
    category: "live",
  },
  {
    date: "2024.11.17",
    time: "14:00",
    title: "握手会",
    description: "池袋サンシャインシティ",
    category: "event",
  },
  {
    date: "2024.11.21",
    time: "20:00",
    title: "ラジオ出演",
    description: "FM東京",
    category: "media",
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

// スケジュールイベントの型を定義
export interface ScheduleEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  category?: "live" | "event" | "media";
}

// データを型付きの配列として定義
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
    question: "好きな食べ物は？",
    image: "/images/dummy.png",
    answer: "aaa",
  },
  {
    question: "趣味は？",
    image: "/images/dummy.png",
    answer: "bbb",
  },
  {
    question: "今ハマってることは？",
    image: "/images/dummy.png",
    answer: "ccc",
  },
  {
    question: "好きな食べ物は？",
    image: "/images/dummy.png",
    answer: "aaa",
  },
  {
    question: "趣味は？",
    image: "/images/dummy.png",
    answer: "bbb",
  },
  {
    question: "今ハマってることは？",
    image: "/images/dummy.png",
    answer: "ccc",
  },
  {
    question: "好きな食べ物は？",
    image: "/images/dummy.png",
    answer: "aaa",
  },
  {
    question: "趣味は？",
    image: "/images/dummy.png",
    answer: "bbb",
  },
] as const;

export type TabType = "photos" | "videos" | "tweets";

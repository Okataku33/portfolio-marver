import { scheduleData } from "../constants/data";

export default function Schedule() {
  const getCategoryStyle = (category?: string) => {
    switch (category) {
      case "live":
        return "text-yellow-700";
      case "event":
        return "text-yellow-600";
      case "media":
        return "text-yellow-800";
      default:
        return "text-yellow-700";
    }
  };

  const isUpcoming = (dateStr: string) => {
    const today = new Date();
    const [year, month, day] = dateStr.split(".").map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= today;
  };

  return (
    <section className="py-20 px-6 bg-yellow-50/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-3xl font-light text-yellow-800">映画公開予定</h2>
          <div className="text-sm text-yellow-600">2025年のスケジュール</div>
        </div>

        <div className="space-y-8">
          {scheduleData.map((event, index) => (
            <div
              key={index}
              className={`flex gap-8 items-start border-b border-yellow-100 pb-8 p-4 
                rounded-lg transition-all duration-300 cursor-pointer
                hover:shadow-[0_4px_20px_rgba(255,200,50,0.15)] 
                hover:border-yellow-200 
                hover:-translate-y-0.5 
                hover:bg-yellow-50/30 
                ${isUpcoming(event.date) ? "opacity-100" : "opacity-50"}`}
            >
              {/* 日付部分 */}
              <div className="w-32">
                <div className="text-2xl font-light text-yellow-800">
                  {event.date}
                </div>
                <div className="text-yellow-600">{event.time}</div>
              </div>

              {/* イベント詳細部分 */}
              <div className="flex-1">
                <h3
                  className={`text-xl mb-2 ${getCategoryStyle(event.category)}`}
                >
                  {event.title}
                </h3>
                <p className="text-yellow-600">{event.description}</p>
              </div>

              {/* 詳細リンク */}
              <div className="text-sm">
                <button
                  className="text-yellow-500 hover:text-yellow-700 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                ></button>
              </div>
            </div>
          ))}
        </div>

        {scheduleData.length === 0 && (
          <div className="text-center py-12 text-yellow-600">
            現在予定されているスケジュールはありません。
          </div>
        )}
      </div>
    </section>
  );
}

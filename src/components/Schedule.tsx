import { scheduleData } from "../constants/data";

export default function Schedule() {
  const getCategoryStyle = (category?: string) => {};

  const isUpcoming = (dateStr: string) => {
    const today = new Date();
    const [year, month, day] = dateStr.split(".").map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= today;
  };

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="container mx-auto">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-3xl font-light">映画公開予定</h2>
          <div className="text-sm">2025年のスケジュール</div>
        </div>

        <div className="space-y-8">
          {scheduleData.map((event, index) => (
            <div
              key={index}
              className={`flex gap-8 items-start border-b border-slate-600 pb-8 p-4 
              rounded-lg transition-all duration-300 cursor-pointer
              hover:shadow-lg hover:border-slate-500 
              hover:bg-slate-800/30 
              text-slate-200 
              ${isUpcoming(event.date) ? "opacity-100" : "opacity-50"}`}
            >
              {/* 日付部分 */}
              <div className="w-32">
                <div className="text-2xl font-light">{event.date}</div>
              </div>

              {/* イベント詳細部分 */}
              <div className="flex-1">
                <h3 className={`text-xl mb-2`}>{event.title}</h3>
                <p>{event.description}</p>
              </div>

              {/* 詳細リンク */}
              <div className="text-sm">
                <button
                  className=" hover:text-cyan-400 transition-colors"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  詳細
                </button>
              </div>
            </div>
          ))}
        </div>

        {scheduleData.length === 0 && (
          <div className="text-center py-12">
            現在予定されているスケジュールはありません。
          </div>
        )}
      </div>
    </section>
  );
}

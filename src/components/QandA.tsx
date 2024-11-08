import { qaData } from '../constants/data';

export default function QandA() {
  return (
    <section className="py-20 px-6 bg-yellow-50/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-light mb-12 text-yellow-800">Q&A</h2>

        <div className="space-y-8">
          {qaData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 transition-all duration-300 
                border border-yellow-100 cursor-pointer
                hover:shadow-[0_4px_20px_rgba(255,200,50,0.15)] 
                hover:border-yellow-200 
                hover:-translate-y-0.5
                hover:bg-yellow-50/30"
            >
              {/* Question */}
              <div className="flex gap-4 items-start mb-4">
                <span
                  className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-yellow-800 
                  rounded-full flex items-center justify-center font-bold shadow-sm
                  transition-all duration-300 group-hover:bg-yellow-500"
                >
                  Q
                </span>
                <h3 className="text-lg font-medium pt-1 text-yellow-800">
                  {item.question}
                </h3>
              </div>

              {/* Answer */}
              <div className="flex gap-4 items-start ml-12">
                <span
                  className="flex-shrink-0 w-8 h-8 bg-yellow-200 text-yellow-700 
                  rounded-full flex items-center justify-center font-bold shadow-sm
                  transition-all duration-300"
                >
                  A
                </span>
                <p className="text-yellow-700 pt-1">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

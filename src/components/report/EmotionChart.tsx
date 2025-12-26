import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EMOTION_S_ICONS, EmotionKey } from "@/constants/emotions";

const EmotionChart = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    requestAnimationFrame(() => setAnimate(true));
  }, [location.pathname]);

  const data: { week: string; percent: number; emotion: EmotionKey }[] = [
    { week: "1주", percent: 72, emotion: "happy" },
    { week: "2주", percent: 54, emotion: "sad" },
    { week: "3주", percent: 68, emotion: "joy" },
    { week: "4주", percent: 72, emotion: "happy" },
    { week: "5주", percent: 38, emotion: "neutral" },
  ];

  const percents = data.map(d => d.percent);
  const max = Math.max(...percents);
  const min = Math.min(...percents);

  const getBarColor = (percent: number) => {
    if (percent === max) return "#B28C7E";
    if (percent === min) return "#76615A";
    return "#D4B6A6";
  };

  return (
    <div className="w-full border border-[#E0CFC5] rounded-2xl p-2 bg-white mb-6">
      <div className="flex justify-between px-1">
        {data.map((item, idx) => {
          const barHeight = (item.percent / 100) * 90;

          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-9 h-[90px] mb-1 flex items-end">
                <div
                  className="w-full rounded-t-xl flex items-end justify-center transition-[height] duration-400 ease-out"
                  style={{
                    height: animate ? `${barHeight - 6}px` : "0px",
                    backgroundColor: getBarColor(item.percent),
                  }}
                >
                  <span className="text-[10px] text-white font-bold pb-1">
                    {item.percent}%
                  </span>
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 transition-[bottom] duration-400 ease-out"
                  style={{
                    bottom: animate ? `${barHeight}px` : "0px",
                  }}
                >
                  {EMOTION_S_ICONS[item.emotion]}
                </div>
              </div>

              <span className="text-[10px] font-bold text-[#76615A]">
                {item.week}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmotionChart;

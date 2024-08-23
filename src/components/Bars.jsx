import React from "react";

const Bars = ({ array, barColors }) => {
  const barWidth = `${Math.min(40 / array.length, 4)}%`; // Adjust width based on screen size

  return (
    <div className="flex items-end justify-center w-full lg:mt-5">
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{
            height: `${value + 50}px`,
            width: barWidth,
            backgroundColor:
              barColors[idx] === "default" ? "teal" : barColors[idx]
          }}
          className="mx-[1px] flex justify-center items-end"
        >
          <span className="text-white">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default Bars;

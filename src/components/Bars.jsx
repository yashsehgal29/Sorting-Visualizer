import React from "react";

const Bars = ({ array, barColors }) => {
  const barWidth = `${Math.min(45 / array.length, 4)}%`; // Adjust width based on screen size

  return (
    <div className="flex items-end justify-center w-full mb-3 lg:mt-5">
      {array.map((value, idx) => (
        <div
          key={idx}
          style={{
            height: `${value + 20}px`,
            width: barWidth,
            backgroundColor:
              barColors[idx] === "default" ? "black" : barColors[idx]
          }}
          className="mx-[1px] flex justify-center items-end"
        ></div>
      ))}
    </div>
  );
};

export default Bars;

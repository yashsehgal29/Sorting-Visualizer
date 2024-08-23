import React from "react";

const Navbar = ({
  setspeed,
  setarraysize,
  startSort,
  generateRandomArray,
  setsort
}) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full p-2 text-3xl font-bold text-center bg-[#26001B] ">
        <p className="text-[#FFF600]">Sorting Visualizer</p>
      </div>
      <div className="w-full bg-[#26001B] p-4 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="flex flex-col items-center text-center lg:items-start">
            <span className="text-lg lg:text-xl text-[#FFF600] font-bold ">
              Speed:
            </span>
            <select
              className="p-1 text-lg font-bold text-center rounded-lg"
              name="speed"
              defaultValue="Fast"
              onChange={(e) => setspeed(Number(e.target.value))}
            >
              <option value={60}>Very Slow</option>
              <option value={40}>Slow</option>
              <option value={30}>Medium</option>
              <option value={20}>Fast</option>
              <option value={5}>Very Fast</option>
            </select>
          </div>
          <div className="flex flex-col items-center ">
            <span className="text-lg lg:text-xl text-[#FFF600] font-bold">
              Array Size:
            </span>
            <input
              type="range"
              min={10}
              max={100}
              defaultValue={50}
              className="w-full lg:w-1/2"
              onChange={(e) => setarraysize(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-center w-full lg:w-auto">
            <button
              className="bg-[#FF005C] text-white font-bold p-2 rounded-xl hover:bg-white items-center hover:text-[#FF005C]"
              onClick={generateRandomArray}
            >
              Generate New Array
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-1/3">
          <span className="text-lg lg:text-xl text-[#FFF600] font-bold">
            Sorting Algorithm
          </span>
          <select
            className="p-1 text-lg font-bold text-center rounded-lg"
            name="algo"
            onClick={(e) => setsort(e.target.value)}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="insertion">Insertion Sort</option>
          </select>
        </div>
        <div className="flex justify-center mt-4 lg:mt-0 lg:w-1/4">
          <button
            className="bg-[#FF005C] text-white p-2 rounded-xl font-bold hover:bg-white w-24  hover:text-[#FF005C]"
            onClick={startSort}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

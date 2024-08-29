import React from "react";

const Navbar = ({
  setspeed,
  setarraysize,
  startSort,
  generateRandomArray,
  setsort
}) => {
  return (
    <div className="flex flex-col w-4/5 mt-2 rounded-md shadow-lg">
      <div className="flex items-center justify-center w-full p-2 text-3xl font-bold text-centere">
        <p className="text-black">Sorting Visualizer</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4 bg-white lg:flex-row rounded-xl">
        <div className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-x-6">
          <div className="flex flex-col items-center text-center lg:items-start gap-y-2">
            <span className="text-lg font-bold text-black lg:text-xl ">
              Speed:
            </span>
            <select
              className="p-1 text-lg font-bold text-center border-2 rounded-lg shadow-md black"
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
          <div className="flex flex-col items-center w-3/4 ">
            <span className="text-lg font-bold text-black lg:text-xl">
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
              className="items-center px-3 py-2 font-bold text-white bg-black shadow-xl rounded-xl hover:bg-white hover:text-black"
              onClick={generateRandomArray}
            >
              Generate New Array
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 lg:w-1/3">
          <span className="text-lg font-bold text-black lg:text-xl">
            Sorting Algorithm
          </span>
          <select
            className="p-1 mt-1 text-lg font-bold text-center rounded-lg shadow-md"
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
            className="w-24 p-2 font-bold text-white bg-black shadow-lg rounded-xl hover:bg-white hover:text-black"
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

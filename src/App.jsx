import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Bars from "./components/Bars";
import {
  bubbleSort,
  mergeSort,
  quickSort,
  selectionSort,
  insertionSort
} from "./components/SortingAlgos";

function App() {
  const [array, setarray] = useState([]);
  const [speed, setspeed] = useState(20);
  const [sort, setsort] = useState("bubble");
  const [arraysize, setarraysize] = useState(50);
  const [barColors, setBarColors] = useState([]);

  const setBarColorsHandler = (indices, action) => {
    setBarColors((prevColors) => {
      const newColors = prevColors.slice();
      const color =
        action === "compare"
          ? "red"
          : action === "swap"
          ? "green"
          : action === "copy"
          ? "blue"
          : "default";
      indices.forEach((index) => {
        newColors[index] = color;
      });
      return newColors;
    });
  };

  const startSort = () => {
    switch (sort) {
      case "bubble":
        bubbleSort(array, setarray, speed, setBarColorsHandler);
        break;
      case "selection":
        selectionSort(array, setarray, speed, setBarColorsHandler);
        break;
      case "insertion":
        insertionSort(array, setarray, speed, setBarColorsHandler);
        break;
      case "merge":
        mergeSort(array, setarray, speed, setBarColorsHandler);
        break;
      case "quick":
        quickSort(array, setarray, speed, setBarColorsHandler);
        break;
      default:
        break;
    }
  };

  const generateRandomArray = () => {
    const newArr = Array.from(
      { length: arraysize },
      () => Math.floor(Math.random() * 496) + 5
    );
    setarray(newArr);
    setBarColors(new Array(newArr.length).fill("default"));
  };

  return (
    <div className="flex flex-col w-screen min-h-screen rounded-lg bg-gray-50 ">
      <div className="flex flex-col items-center w-full shadow-red-100">
        <Navbar
          setspeed={setspeed}
          setarraysize={setarraysize}
          startSort={startSort}
          generateRandomArray={generateRandomArray}
          setsort={setsort}
          className="rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center w-screen h-full mt-2">
        <Bars array={array} barColors={barColors} />
      </div>
    </div>
  );
}

export default App;

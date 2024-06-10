export const bubbleSort = (array, setArray, speed, setBarColors) => {
  let animations = [];
  let auxArray = array.slice();
  for (let i = 0; i < auxArray.length - 1; i++) {
    for (let j = 0; j < auxArray.length - i - 1; j++) {
      animations.push([j, j + 1, 'compare']);
      if (auxArray[j] > auxArray[j + 1]) {
        let temp = auxArray[j];
        auxArray[j] = auxArray[j + 1];
        auxArray[j + 1] = temp;
        animations.push([j, j + 1, 'swap']);
      }
      animations.push([j, j + 1, 'revert']);
    }
  }

  animateSort(animations, setArray, speed, setBarColors);
};
export const selectionSort = (array, setArray, speed, setBarColorsHandler) => {
  let animations = [];
  let auxArray = array.slice();

  for (let i = 0; i < auxArray.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < auxArray.length; j++) {
      animations.push([minIdx, j, 'compare']);
      if (auxArray[j] < auxArray[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = auxArray[i];
      auxArray[i] = auxArray[minIdx];
      auxArray[minIdx] = temp;
      animations.push([minIdx, i, 'swap']);
    }
    animations.push([minIdx, i, 'revert']); // revert comparison
  }

  animateSort(animations, setArray, speed, setBarColorsHandler);
};


export const insertionSort = (array, setArray, speed, setBarColors) => {
  let animations = [];
  let auxArray = array.slice();

  for (let i = 1; i < auxArray.length; i++) {
    let key = auxArray[i];
    let j = i - 1;
    while (j >= 0 && auxArray[j] > key) {
      animations.push([j, j + 1, 'compare']);
      auxArray[j + 1] = auxArray[j];
      animations.push([j, j + 1, 'swap']);
      animations.push([j, j + 1, 'revert']);
      j = j - 1;
    }
    auxArray[j + 1] = key;
  }

  animateSort(animations, setArray, speed, setBarColors);
};

export const mergeSort = async (array, setArray, speed, setBarColorsHandler) => {
  const merge = async (arr, l, m, r, animations) => {
    let i, j, k;
    let n1 = m - l + 1;
    let n2 = r - m;
  
    /* create temp arrays */
    let L = [];
    let R = [];
  
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) {
      L[i] = arr[l + i];
    }
    for (j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
    }
  
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
      // Comparing indexes for visualization
      animations.push([l + i, m + 1 + j, 'compare']);
      if (L[i] <= R[j]) {
        // Copy the value to the original array and update the color
        animations.push([k, L[i], 'copy']);
        arr[k++] = L[i++];
      } else {
        animations.push([k, R[j], 'copy']);
        arr[k++] = R[j++];
      }
    }
  
    /* Copy the remaining elements of L[], if there are any */
    while (i < n1) {
      animations.push([k, L[i], 'copy']);
      arr[k++] = L[i++];
    }
  
    /* Copy the remaining elements of R[], if there are any */
    while (j < n2) {
      animations.push([k, R[j], 'copy']);
      arr[k++] = R[j++];
    }
  };

  const mergeSortHelper = async (arr, l, r, animations) => {
    if (l >= r) {
      return;
    }
    const m = Math.floor((l + r) / 2);
    await mergeSortHelper(arr, l, m, animations);
    await mergeSortHelper(arr, m + 1, r, animations);
    await merge(arr, l, m, r, animations);
  };

  const animations = [];
  await mergeSortHelper(array, 0, array.length - 1, animations);

  animateSort(animations, setArray, speed, setBarColorsHandler);
};








export const quickSort = (array, setArray, speed, setBarColorsHandler) => {
  let animations = [];
  let auxArray = array.slice();

  const partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      animations.push([j, high, 'compare']);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        animations.push([i, j, 'swap']);
      }
      animations.push([j, high, 'revert']);
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    animations.push([i + 1, high, 'swap']);
    return i + 1;
  };

  const quickSortHelper = (arr, low, high) => {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
    }
  };

  quickSortHelper(auxArray, 0, auxArray.length - 1);
  animateSort(animations, setArray, speed, setBarColorsHandler);
};


const animateSort = (animations, setArray, speed, setBarColorsHandler) => {
  let delay = 0;

  animations.forEach(([idx, value, action]) => {
    setTimeout(() => {
      if (action === 'compare') {
        setBarColorsHandler([idx, value], 'compare');
      } else if (action === 'swap') {
        setArray((prevArray) => {
          const newArray = [...prevArray];
          const temp = newArray[idx];
          newArray[idx] = newArray[value];
          newArray[value] = temp;
          return newArray;
        });
        setBarColorsHandler([idx, value], 'swap');
      } else if (action === 'copy') {
        setArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[idx] = value;
          return newArray;
        });
        setBarColorsHandler([idx], 'copy');
      } else if (action === 'revert') {
        setBarColorsHandler([idx, value], 'default');
      }
    }, delay);
    delay += speed;
  });

  // Reset bar colors after sorting
  setTimeout(() => {
    setBarColorsHandler(Array.from({ length: animations.length }, (_, idx) => idx), 'default');
  }, delay);
};

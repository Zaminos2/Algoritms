function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
  
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
   
    return mid;
  } else if (arr[mid] > target) {

    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
 
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}

function findKthElement(arr1, arr2, k) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray[k - 1];
}


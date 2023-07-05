function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  function plusOne(digits) {
  const result = [];
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10); 
  }

  if (carry > 0) {
    result.unshift(carry); 
  }

  return result;
}
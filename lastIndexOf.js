function lastIndexOf(array, value) {
  for (var x = array.length - 1; x >= 0; x--) {
    if (array[x] == value) {
      return x
    }
  }
  return -1;
}

console.log(lastIndexOf([1,3,7,8,9], 8))
function range(start, end ,step) {
  var array = [];
    if ((start == undefined) || (end == undefined) || (step == undefined)) {
      return array;
    } else if (start > end) {
        return array;
      } else if (step < 0) {
        return array;
      } else {
      for (var x = start; x <= end; x = x + step) {
         array.push(x);
    }

    return array;}
}

console.log(range(1,7,2));


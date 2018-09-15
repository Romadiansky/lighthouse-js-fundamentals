function loopyLighthouse(start, end) {
  for (var x = start; x <= end; x++) {
    if ((x % 3 == 0) && (x % 4 == 0)) {
      console.log("LoopyLighthouse");
    } else if (x % 3 == 0) {
      console.log("Loopy");
    } else if (x % 4 == 0) {
      console.log("Lighthouse");
    } else {
      console.log(x);
    }
  }
}

loopyLighthouse(100, 200);
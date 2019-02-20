function fpb(angka1, angka2) {
    var result = 0;
    var smaller = 0

    if(angka1 > angka2) {
        smaller = angka2
    } else {
        smaller = angka1
    }
    for(var i = 0; i < smaller+1; i++) {
        if(angka1 % i === 0 && angka2 % i ===0) {
            result = i;
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(fpb(8, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
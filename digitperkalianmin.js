function digitPerkalianMinimum(angka) {
    var result = []

    for(var i = 0; i <= angka; i++) {
        for(var j = 0; j <= angka; j++) {
            if(i * j === angka) {
                var mix =  i.toString() + j.toString()
                result.push(mix)
            }
        }
    }
    // console.log(result)
    var min = result[0].length
    for(var k = 0; k < result.length; k++) {
        if(result[k].length < min) {
            min = result[k].length
        }
    }
    return min
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
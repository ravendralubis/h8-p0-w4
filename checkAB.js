function checkAB(num) {
    var str = num.split('')
    var arr = []

    for(var i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            arr.push(str[i])
        }
    }
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] === 'a') {
            for(var k = j; k <= (j+3); k++) {
                if(arr[k] === 'b') {
                    return true
                }
            }
        }
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
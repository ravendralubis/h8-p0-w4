function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var output = []
  var biaya = 2000
  var awal = 0
  var akhir = 0

  for(var i = 0; i < arrPenumpang.length; i++) {
      var obj = {
          penumpang: arrPenumpang[i][0],
          naikDari: arrPenumpang[i][1],
          tujuan: arrPenumpang[i][2],
          bayar: 0
      }
      for(var j = 0; j < rute.length; j++) {
        //   console.log(j)
        // console.log( "ini indeks =" + j + " ini nilai rutenya" + rute[j] )
          if(obj.naikDari === rute[j]) {
               awal = j   
          } else if(obj.tujuan === rute[j]) {
               akhir = j
          }
      }
      obj.bayar = Math.abs(biaya * (akhir - awal))
      output.push(obj)
  }
  return output
}
  


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
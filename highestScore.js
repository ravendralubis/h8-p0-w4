function highestScore (students) {
  var output = {}

  if(students === 0)
  return {}

  for(var i = 0; i < students.length; i++) {
    //   console.log('indeks ke ', i, students[i])
    if(output[students[i].class] === undefined) {
        output[students[i].class] = {}
        output[students[i].class] = {
            name: students[i].name,
            score: students[i].score
        }
    }

    if(output[students[i].class].score < students[i].score){
        output[students[i].class] = {
            name: students[i].name,
            score: students[i].score
        }
    }
  }


//   for(var j = 0; j < students.length; j++) {
//     var maxScore = 0
//       if(students[j].score > maxScore) {
//           maxScore = students[j].score
//       }  
      
//         if(maxScore <= students[j].score) {
//             output[students[j].class] = {
//                 name: students[j].name,
//                 score: students[j].score
//             }
//             maxScore = students[j].score
//         }  
          
//   }
//   console.log(maxScore)
//   console.log(output)
return output
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

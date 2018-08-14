function dwarfRollCall(dwarves) {
  var numberedDwarves = ''
  
  for (var i = 0; i < dwarves.length; i++) {
<<<<<<< HEAD
    numberedDwarves += `${i+1}. ${dwarves[i]} `
=======
    numberedDwarves += `${i+1}. ${dwarves[i]}`
>>>>>>> 9a391c880357e780ffe72d6b1c1da022bdf9d504
  }

  return `${numberedDwarves}`
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i].toUpperCase()
    planeteerCalls[i] += "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    } else {
      return false
    }
  }
}

function findTheCheese (foods) {
  var typesOfCheese = ["cheddar", "gouda", "camembert"]
  
  for (var i = 0; i < foods.length; i++) {
    for(var b = 0; b < typesOfCheese.length; b++) {
<<<<<<< HEAD
      if (foods[i] === typesOfCheese[b]) {
          return foods[i]
      }
      }
      } return "no cheese!"
      } 
      
=======
      if (foods[i] != typesOfCheese[b]) {
        return "no cheese!"
      } else {
        return foods[i]
      }
      } 
      }
    }
>>>>>>> 9a391c880357e780ffe72d6b1c1da022bdf9d504

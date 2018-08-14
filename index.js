function dwarfRollCall(dwarves) {
  var numberedDwarves = ''
  
  for (var i = 0; i < dwarves.length; i++) {
    numberedDwarves += `${i+1}. ${dwarves[i]} `
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
  var typesOfCheese = ["cheddar", "gouda", "camembert", "american"]
  
  for (var i = 0; i < foods.length; i++) {
    for(var b = 0; b < typesOfCheese.length; b++) {
      if (foods[i] === typesOfCheese[b]) {
          return foods[i]
      }
      }
      } return "no cheese!"
      } 
      
      function wordsWithB(words) {
        var withThatStartWithB = []
        for (var i = 0; i < words.length; i++) {
          if (words[i].startsWith("b")) {
            withThatStartWithB.push(words[i])
          }
        } return withThatStartWithB
      }

Sally Bob Billy
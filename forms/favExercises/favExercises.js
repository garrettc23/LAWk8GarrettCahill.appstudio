let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

btnDone.onclick=function(){
  // returns array of the choices' text

  let message = "Your favorite workouts are: "
  for (i = 0; i < selExercises.text.length; i++)
     message = message + selSandwiches.text[i] + ", "

  // remove the last comma
  // slice drops last 2 characters (comma and space)
  //     starts at 0, and goes to end of the
  //     string minus 2 charactersa
  message = message.slice(0, -2)
  console.log(message)
}



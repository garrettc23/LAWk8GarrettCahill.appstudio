rdButton.onchange=function(){
   console.log(`I would agree that you are a ${rdButton.value} person too!
     and the text of the choice is ${$("input[name=rdButton]:checked").prop("value")}`)

   if (rdButton.value == 0)   // picked the first choice
      console.log(`I would agree that you are a trusting person too!`)
   else
      console.log(`I would agree that you are a optimistic person too!`)
}
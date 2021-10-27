hmbMenu.onclick=function(s){
 hmbrMenu.hidden = false
}

hmbrMenu.onclick=function(s){ // when just click the control. 's' is
                              // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Hide Hamb See Btn":
            // hide the hamburger menu and show signin button
                hmbrMenu.hide()
                btnShow.show()
                break
            case "Overview":
                // Go to the Overview form
                ChangeForm(Overview)
                break
       }  //switch
   } //else
}


btnShow.onclick=function(){
  // if disappears (browser issue), force to reshow
  hmbrMenu.show()
}
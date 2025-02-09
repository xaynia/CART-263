setup_B();
/** THEME: CHAOS  */
function setup_B() {
  console.log("in b");
  /**************************************************** */
  //get the buttons
  activateButtons_B(`#TEAM_B`, "ani_canvB");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_B(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    }
  }
  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");
  }
  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniB(parentCanvas) {
    console.log("in B");
  }
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
  /**************** TASK *******************************************
    * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
    * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
    * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
    * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
    * 
    * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
    * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
    * this is so that your styles are not overriden by other teams.
    * NOTE::: All your code is to be added here inside this function -
    * remember you can define other functions inside....
    * Do not change any code above or the HTML markup.
    * **/


  function aniC(parentCanvas) {
    // 1. create new <div> -> called divElement
    let divElement = document.createElement("div");
    // 2. style div
    divElement.style.width = "375px";
    divElement.style.height = "375px";
    divElement.style.backgroundColor = "black";
    // so we can see multiple squares side-by-side
    divElement.style.display = "flex";
    divElement.style.flexWrap = "wrap";

    // 3. append to parent 
    parentCanvas.appendChild(divElement);

    console.log("in C");

    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
      console.log("Key down:", e.code);

      // 4. change the big square color when key is pressed
      divElement.style.backgroundColor = "blue";

      // 5. Create smaller squares inside the main div as a pattern
      for (let i = 0; i < 5; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.width = "20px";
        newSquare.style.height = "20px";
        newSquare.style.margin = "2px";
        newSquare.style.backgroundColor = getRandomColor();

        newSquare.style.display = "inline-block";

        divElement.appendChild(newSquare);
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log("Key up:", e.code);

      // 6. revert color (or do something else) on key release
      divElement.style.backgroundColor = "black";
    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);

    // Helper function to pick a random color
    function getRandomColor() {
      // array of colors
      const colors = ["red", "blue", "green", "orange", "purple", "yellow", "pink"];
      let randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  }
}
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



/* We have created an eventLister on the div to track the choices the user
is picking everytime for the click event */

 //Generating Computer Choice

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"]; /*We do not have any straightforward technique in js to pick
     random strings from a bunch of different string values. But we have a frequently used function in js
     that is called random function which generates values from 0 to 1 randomly. As numbers in array
      can be indexes so we have stored our options in the from of an array*/ 
    
    /*The below line is very important.
     Math.random() its a function that helps us to pick a random number. If our targetted max value is 2
     then we will multiply it by 3 if it is 4 then 5... 'floor' helps us to give whole number from a decimal number */
    const randomIdx=Math.floor(Math.random() *3);
    return options[randomIdx];

}

const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#081B31";
};

const showWinner=(userWin, userChoice,compChoice)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You won")
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="Green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose")
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
}



const playGame =(userChoice) =>{
    console.log("user choice is = ", userChoice);
    const compChoice= genCompChoice();
    console.log("Comp choice is = ", compChoice);

    if(userChoice===compChoice){
        //Draw
        drawGame();

    } else{
        let userWin= true;
        if(userChoice==="rock"){
        //computer choice will not be rock as it has a dif function so comp choice might be scissor or paper
         userWin=compChoice==="paper" ? false : true; 

        } else if(userChoice==="paper"){
            //comp choices remains rock and scissor
            userWin=compChoice==="scissor"?false:true;

        }else{
            //rock, paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice,compChoice);
    }

};

choices.forEach((choice) =>{ /*Selecting indivual choice from all three choices  */
    choice.addEventListener("click", ()=>{ /*Adding eventListers for each choice to track the click event */
    const userChoice =choice.getAttribute("id");
    playGame(userChoice);
    
    });

});
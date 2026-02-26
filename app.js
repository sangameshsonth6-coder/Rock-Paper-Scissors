let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice  = () =>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const userscorepara =document.querySelector("#userscore")
const compscorepara =document.querySelector("#compscore")

const drawgame = () =>{
   
    msg.innerText = "game was draw. play again"
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black"
} 

const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you Won the game! your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor = "green"
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lost the game! ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = genCompChoice();
    console.log("comp choice",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock") {
        userwin = compchoice === "paper"? false : true;
        }else if(userchoice ==="paper") {
        userwin = compchoice === "scissors"?false : true;
        }else{
        userwin = compchoice === "rock"? false : true
        }
        showWinner(userwin, userchoice, compchoice);
    }

}


choices.forEach((choice) => {   
    choice.addEventListener("click", () => {
         const userchoice = choice.querySelector("img").getAttribute("id");
        playgame(userchoice)

    });
});


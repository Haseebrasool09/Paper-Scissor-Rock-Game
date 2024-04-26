document.addEventListener("DOMContentLoaded", () => {

    let userscore = 0;
    let compscore = 0;


let picture = document.querySelectorAll(".choice");
let message = document.querySelector(".move");
let userscor = document.querySelector(".user-score");
let compscor = document.querySelector(".comp-score");

const compchoice = () => {
    let option = ["Paper", "Scissor","Rock"];
    const idindex = Math.floor(Math.random() * 3);
    return option [idindex];

};


const drawgame = () => {
    
    message.innerText = ("Game was Draw. Play Again");
};

const showwinner = (userwin, player, compprint) => {
    if(userwin){
        userscore++;
        userscor.innerText = userscore;
        message.innerText = (`Athlete is Win. "Your ${player} beats ${compprint}"`);
        

    }else{
        compscore++;
        compscor.innerText = compscore;
        message.innerText = (`Athlete is lose. "Your ${compprint} beats ${player}"`);
        console.log("You lose!");
        
    }
}

const playgame = (player) => {
   console.log("User choice =", player );
   
   const compprint = compchoice();
   console.log("Comp choice = ", compprint);
   

   if(player === compprint) {
    drawgame();
   } else {
    let userwin = true;
    if(player === "Rock"){
       userwin = compprint === "Paper" ? false : true;
    }else if (player === "Paper") {
        userwin = compprint === "Scissor" ? false : true;
    } else {
        userwin = compprint === "Rock" ? false : true; 
    };

    showwinner (userwin , player, compprint);

   }
};




picture.forEach((choice) => {
    choice.addEventListener("click", () => {
        
        const attri = choice.getAttribute("id");
        
        playgame(attri);

    
        
    });
});



});
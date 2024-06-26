let user_score = 0;
let comp_score = 0;

let user_scoreResult = document.querySelector("#u-score");
let comp_scoreResult = document.querySelector("#c-score");

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const draw_game = () =>{
    msg.innerText = "The Match Was Draw";
    msg.style.backgroundColor = "#4A6D7C";
};

const gencomp_choice = () =>{
    const options = ["rock","paper","scissors"];
    const rand_idx = Math.floor(Math.random() * 3);
    return options[rand_idx];
};

const show_winner = (user_win) => {
    if( user_win == true){
        user_score++;
        msg.innerText = "You Won";
        msg.style.backgroundColor = "#44F74A";
        user_scoreResult.innerText = user_score;
    }
    else{
        comp_score++;
        msg.innerText = "Comp Won";
        msg.style.backgroundColor = "#D63131";
        comp_scoreResult.innerText = comp_score;
    }
};

const playgame = (user_choice) => {
    console.log(`user choice = ${user_choice}`);
    // getting computer's choice.
    const comp_choice = gencomp_choice();
    console.log(`comp choice = ${comp_choice}`);
    
    let user_win = true;
    if( comp_choice === user_choice){
        draw_game();
    }
    else{
        if( user_choice === "rock"){
            user_win = comp_choice === "paper" ? false : true ;
        }
        else if( user_choice === "paper"){
            user_win = comp_choice === "scissors" ? false : true ;
        }
        else if( user_choice === "scissors"){
            user_win = comp_choice === "rock" ? false : true ;
        }
        console.log(user_win);
        show_winner(user_win);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const user_choice = choice.getAttribute("id");
        playgame(user_choice);
    })
})

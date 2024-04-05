



let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let gameButton=false;

let h2=document.querySelector("h2");
let btns=["red","orange","lime","purple"];
// let button=document.getElementById("startButton");
// button.addEventListener("click", startGame);
document.addEventListener("DOMContentLoaded", function() {
    // Check if the device supports touch events
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    // Add event listener based on device type
    if (isTouchDevice) {
        // For touch devices (mobile)
        document.addEventListener("touchstart", startGame);
    } else {
        // For desktop devices
        document.addEventListener("keypress", startGame);
    }
});
function startGame() {
    // Hide the start message
    gameButton=true;
    if(gameButton)
    {
        document.getElementById("startButton").style.display = "none";
    }
    
    if(started==false)
    {
        console.log("Game Started!");
        started=true;
    }
    levelUp();
   
    
}

// document.addEventListener("keypress",function()//game started after any key pressed on document
// {
//     if(started==false)
//     {
//         console.log("Game Started!");
//         started=true;
//     }
//     levelUp();
   
// });
function btnflash(btn)
{
   btn.classList.add("flash");//flash class 250 mili second ke liye add hogi
   setTimeout(function()
   {
    btn.classList.remove("flash");
   }, 250);
}
function userflash(btn)
{
   btn.classList.add("userflash");
   setTimeout(function()
   {
    btn.classList.remove("userflash");
   }, 100);
}

function levelUp()
{
    userSeq=[];
    level++;
    
    h2.innerText=`Level:-${level}`;
    let randIdx=Math.floor(Math.random() * 4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);//here . is string part
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    btnflash(randbtn);

}
function checkAns(idx)
{
    // console.log("current level",level);
    // let idx=level-1;
    if(gameSeq[idx] === userSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
           setTimeout( levelUp,1000);
        }
        console.log("color matched!");
    }
    else{
        h2.innerHTML=`Game over! <br> Your score was :<b> ${level} </b> <br>Press any key to start again...`;
        let col=document.querySelector("body");
        col.style.backgroundColor="orange";
        setTimeout(function()
        {
            col.style.backgroundColor="white";
        },100);
        gameButton=false;
        reset();
        
    }
}
function btnpress()
{
    let btn=this;
    userflash(btn);
    // btnflash();
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)//for adding btnpress event on all four btns
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
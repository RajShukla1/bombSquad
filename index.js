var set = new Set();
var score = 0;

window.onload = function(){
    table();
    bombs();
    start();   
 }
 //generating board with 81 cells
 function table(){
    for( let i = 0; i < 81; i++){
        let newcell = window.document.createElement("div");
        let node = document.createTextNode('🙂');
        newcell.appendChild(node);
        newcell.classList.add("items");
        newcell.classList.remove("clicked");
        newcell.classList.remove("items-visible");
        newcell.setAttribute("id" ,"cell_"+ i);
        document.getElementById("container").appendChild(newcell);
    }
 }

 // generating 11 bombs randomly for board
function bombs(){
    while(set.size < 11){
        set.add(Math.floor(Math.random()*81));
    }  
}

//game begins
 function start(){
    for(let i = 0; i < document.getElementById("container").children.length; i++){
        document.getElementById("container").children[i].addEventListener("click", play);
   }
 }

 function play(){
        let clickedCell = this.id;
        this.classList.add("clicked");
        document.getElementById(clickedCell).innerText  ='🙃';
        itr = set.values();

        for( let i = 0; i < set.size; i++){
            if(clickedCell == ("cell_"+itr.next().value)){
                itr = set.values();
                let j =0;
                while(j < 11){
                let bomb = document.getElementById("cell_"+itr.next().value);
                bomb.innerText = '💣';
                bomb.classList.add("items-visible");
                j++;
                }
                document.getElementById("resultDisplay").innerText = "GAME OVER";
                gameOver();
            }
        }
        document.getElementById("gameScore").innerText = ++score;
       if(score == 71){
       document.getElementById("resultDisplay").innerText = "YOU WIN ☻";
       gameOver();
       }
 }


function gameOver(){
    let btn = document.getElementById("resetButton");
    btn.removeAttribute("disabled");
    for(let i = 0; i < document.getElementById("container").children.length; i++){
        let nums = document.getElementById("container").children[i];
        nums.removeEventListener('click', play);
        nums.classList.add("clicked");
    }    

}
function restart(){
    location.reload();
}
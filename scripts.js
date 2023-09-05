/* let player1 = "X"
let gameend = false
const element = document.getElementById("myElement"); 

for (let i = 1; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener(
        'click',
        function(){
            if (this.innerHTML === "" && gameend) {
                this.innerHTML = player1
            }
        }
    );
    
}


if (player1 === "X") {
    player1 = "O"

}else{
    player1 = "X"
}

this.classList.add(player1()); */

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

function clck(cell){
    cell.textContent = "X"
}


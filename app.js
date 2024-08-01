



let body = document.querySelector("body");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".hide");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let para =  document.querySelector("#msg");

let turno = true;
  const winpattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],  
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
 if(turno){//playerX
  turno=false;
  box.innerText = "X";
  box.style.color = "rgba(3, 150, 248, 0.705)";
 }
 else{//playerO
  turno=true;
  box.innerText = "O";
  
 }
 box.disabled = true;

   checkWinner();
 })
});

const win = ()=>{
  for(let box of boxes){
    box.disabled = true;
    document.body.style.backgroundImage = 'url("/game.png")';
  }
}

const checkWinner =   ()=>{
for(let pattern of winpattren){
 let  pos1val = boxes[pattern[0]].innerText;
 let  pos2val = boxes[pattern[1]].innerText;
  let pos3val = boxes[pattern[2]].innerText;


if( pos1val != "" && pos2val != "" && pos3val != ""){
  if( pos1val===pos2val&& pos2val===pos3val){
      console.log(`winner is ${pos1val}`);
msgcontainer.classList.remove("hide");
  para.innerText = ` winner is ${pos1val}`;
  win();


  }
}
};
}
//new btn
newbtn.addEventListener("click", ()=>{
   turno = true;
 for(box of boxes){
  box.disabled = false;
  box.innerText = "";
  msgcontainer.classList.add("hide");
  document.body.style.backgroundImage = 'url("/game.png")';


}
})


//resetbtn
resetbtn.addEventListener("click", ()=>{
  turno = true;
for(box of boxes){
 box.disabled = false;
 box.innerText = "";
 msgcontainer.classList.add("hide");
 document.body.style.backgroundImage = 'url("/game.png")';

}
})

let audioPointer; 
let audio;
let i=0;
let txt="";

/*
const audioArray = [ 
  "b.mp3",
  "g1" 
];
*/
const mus = {
  A: new Audio("g1.mp3"),
  B: new Audio("g2.mp3"),
  C: new Audio("g3.mp3"),
  D: new Audio("g4.mp3"),
  E: new Audio("g5.mp3"),
  F: new Audio("g6.mp3"),
  G: new Audio("g7.mp3"),
  H: new Audio("g8.mp3"),
  I: new Audio("g9.mp3"),
  J: new Audio("g10.mp3"),
  K: new Audio("g11.mp3"),
  L: new Audio("g12.mp3"),
  M: new Audio("g13.mp3"),
  N: new Audio("g14.mp3"),
  O: new Audio("g15.mp3"),
  P: new Audio("g16.mp3"),
  Q: new Audio("g17.mp3"),
  R: new Audio("g18.mp3"),
  S: new Audio("g19.mp3"),
  T: new Audio("g20.mp3"),
  U: new Audio("g21.mp3"),
  V: new Audio("g22.mp3"),  /*&#119187*/ 
  W: new Audio("g23.mp3"),
  X: new Audio("g24.mp3"),
  Y: new Audio("g25.mp3"), 
  Z: new Audio("g26.mp3"),
 " ":new Audio("g27.mp3"),  //&#119047;	\x1d107
 "#":new Audio("g12.mp3")
};

const startButton = document.getElementById('#startButton');//instead of using doublequotes
//startButton.addEventListener("onload", onStart); 
//console.log(txt);

function playNext() { 
  //txt = document.getElementById("d1").value.toUpperCase()
  txt=sessionStorage.getItem("usertext").toUpperCase()

  if (i < txt.length) { 
    //audio = new Audio(audioArray[audioPointer]);
    if (!(txt[i] in mus)){
      mus["#"].play()
      mus["#"].addEventListener("ended",playNext);
    }
    else if(txt[i] in mus){
      mus[txt[i]].play()
      mus[txt[i]].addEventListener("ended",playNext);
    }
    //mus[txt[i]].addEventListener("ended",playNext);
    //audio.play();
    //mus["#"].currentTime = 0;
    //mus[txt[i]].currentTime = 0;
    console.log(`playing ${txt[i]}`);
    //audioPointer += 1;
    i += 1;
  } else { 
    console.log("finished"); 
  }
  
} 
   
function onStart() {
  if (audio) { 
    audio.pause()
  }
  console.log("start");
  audioPointer = 0;
  playNext();
}
   
   


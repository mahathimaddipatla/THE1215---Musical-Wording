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
  A: new Audio("A0.mp3"),
  B: new Audio("A1.mp3"),
  C: new Audio("A2.mp3"),
  D: new Audio("A3.mp3"),
  E: new Audio("A4.mp3"),
  F: new Audio("A5.mp3"),
  G: new Audio("A6.mp3"),
  H: new Audio("A7.mp3"),
  I: new Audio("Ab1.mp3"),
  J: new Audio("Ab2.mp3"),
  K: new Audio("Ab3.mp3"),
  L: new Audio("Ab4.mp3"),
  M: new Audio("Ab5.mp3"),
  N: new Audio("Ab6.mp3"),
  O: new Audio("Ab7.mp3"),
  P: new Audio("B0.mp3"),
  Q: new Audio("B1.mp3"),
  R: new Audio("B2.mp3"),
  S: new Audio("B3.mp3"),
  T: new Audio("B4.mp3"),
  U: new Audio("B5.mp3"),
  V: new Audio("B6.mp3"),  /*&#119187*/ 
  W: new Audio("B7.mp3"),
  X: new Audio("Bb1.mp3"),
  Y: new Audio("Bb2.mp3"), 
  Z: new Audio("Bb3.mp3"),
 " ":new Audio("Bb4.mp3"),  //&#119047;	\x1d107
 "#":new Audio("Bb5.mp3")
};

const startButton = document.getElementById('#startButton');//instead of using doublequotes
//startButton.addEventListener("onload", onStart); 
//console.log(txt);

function playNext() { 
  txt = document.getElementById("d1").value.toUpperCase()
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
   
   


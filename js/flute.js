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
  A: new Audio("audio/Flute/f1.mp3")
//   B: new Audio("f2.mp3"),
//   C: new Audio("f3.mp3"),
//   D: new Audio("f4.mp3"),
//   E: new Audio("f5.mp3"),
//   F: new Audio("f6.mp3"),
//   G: new Audio("f7.mp3"),
//   H: new Audio("f8.mp3"),
//   I: new Audio("f9.mp3"),
//   J: new Audio("f10.mp3"),
//   K: new Audio("f11.mp3"),
//   L: new Audio("f12.mp3"),
//   M: new Audio("f13.mp3"),
//   N: new Audio("f14.mp3"),
//   O: new Audio("f15.mp3"),
//   P: new Audio("f16.mp3"),
//   Q: new Audio("f17.mp3"),
//   R: new Audio("f18.mp3"),
//   S: new Audio("f19.mp3"),
//   T: new Audio("f20.mp3"),
//   U: new Audio("f21.mp3"),
//   V: new Audio("f22.mp3"),  /*&#119187*/ 
//   W: new Audio("f23.mp3"),
//   X: new Audio("f24.mp3"),
//   Y: new Audio("f25.mp3"), 
//   Z: new Audio("f26.mp3"),
//  " ":new Audio("f27.mp3"),   //&#119047;	\x1d107
//  "#":new Audio("f28.mp3")
};

const startButton = document.getElementById('#startButton');//instead of using doublequotes
//startButton.addEventListener("onload", onStart); 
//console.log(txt);

function playNext() { 
  //txt = document.getElementById("d1").value.toUpperCase()
  txt="A"//sessionStorage.getItem("usertext").toUpperCase()
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
   
   


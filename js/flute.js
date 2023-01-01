let audioPointer; 
let audio;
let i=0;
let txt="";
//let example="";
const mus = {
  A: new Audio("audio/Flute/f1.MP3"),
  B: new Audio("audio/Flute/f2.mp3"),
  C: new Audio("audio/Flute/f3.mp3"),
  D: new Audio("audio/Flute/f4.mp3"),
  E: new Audio("audio/Flute/f5.mp3"),
  F: new Audio("audio/Flute/f6.mp3"),
  G: new Audio("audio/Flute/f7.mp3"),
  H: new Audio("audio/Flute/f8.mp3"),
  I: new Audio("audio/Flute/f9.mp3"),
  J: new Audio("audio/Flute/f10.mp3"),
  K: new Audio("audio/Flute/f11.mp3"),
  L: new Audio("audio/Flute/f12.mp3"),
  M: new Audio("audio/Flute/f13.mp3"),
  N: new Audio("audio/Flute/f14.mp3"),
  O: new Audio("audio/Flute/f15.mp3"),
  P: new Audio("audio/Flute/f16.mp3"),
  Q: new Audio("audio/Flute/f17.mp3"),
  R: new Audio("audio/Flute/f18.mp3"),
  S: new Audio("audio/Flute/f19.mp3"),
  T: new Audio("audio/Flute/f20.mp3"),
  U: new Audio("audio/Flute/f21.mp3"),
  V: new Audio("audio/Flute/f22.mp3"),  /*&#119187*/ 
  W: new Audio("audio/Flute/f23.mp3"),
  X: new Audio("audio/Flute/f24.mp3"),
  Y: new Audio("audio/Flute/f25.mp3"), 
  Z: new Audio("audio/Flute/f26.mp3"),
 " ":new Audio("audio/Flute/f27.mp3"),   //&#119047;	\x1d107
 "#":new Audio("audio/Flute/f28.mp3")
};
//const startButton = document.getElementById('#startButton');//instead of using doublequotes
//startButton.addEventListener("onload", onStart); 
//console.log(txt);

function playNext() { 
  //txt = document.getElementById("d1").value.toUpperCase()
  //txt = document.getElementById("t").value.toUpperCase()
  txt=sessionStorage.getItem("usertext").toUpperCase()
  // example=sessionStorage.getItem("usertext").toUpperCase()
  // let c=sessionStorage.getItem("count")
  // let k=0
  // for(let j=c;j<example.length;j++)
  // {
  //   txt[k]=example[j]
  //   k++
  // }
  if (i < txt.length) { 
    //audio = new Audio(audioArray[audioPointer]);
    if (!(txt[i] in mus)){
      mus["#"].play()
      mus["#"].addEventListener("ended",playNext);
    }
    else if(txt[i] in mus){
      console.log(txt);
      //console.log(c);
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
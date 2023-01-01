const mus = {
    A : new Audio("m.wav"),
    B : new Audio("m.wav"),
    
}

let txt="";
function emc()
{
txt = document.getElementById("d1").value.toUpperCase()
console.log(txt);
for (const char of txt)
{
    char in mus ? mus[char].play() : char;
}
}
/*if(txt.charAt(0) == "A")
{
    mus.A.play()
}*/
//txt.addEventListener("click", emc);

/*
let s="";
document.getElementById("t2").innerHTML = s;
console.log(s);
return s;

for (const char of txt){
   s += char in encil ? encil[char] : char;
}
}
*/

//let play = document.getElementById("play");
//let clay = document.getElementById("clay");
function playMusic() {
    let audio = new Audio("m.wav");
    //let madio = new Audio("pF.mp3");
    audio.play()
}
//play.addEventListener("click" , playMusic);
//clay.addEventListener("click" , playMusic);
const mus = {
    A : new Audio("flute a.mp3"),
    B : new Audio("flute b.mp3"),
    C : new Audio("flute c.mp3"),
    D : new Audio("flute d.wav"),
    E : new Audio("flute e.wav"),
    F : new Audio("flute f.wav")
    

    
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
    let audio = new Audio("b.mp3");
    //let madio = new Audio("pF.mp3");
    audio.play()
}
//play.addEventListener("click" , playMusic);
//clay.addEventListener("click" , playMusic);
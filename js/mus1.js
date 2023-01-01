const mus = {
    A : new Audio("audio/guitar a.wav"),
    B : new Audio("audio/guitar b.wav"),
    C : new Audio("audio/guitar c.wav"),
    D : new Audio("audio/guitar d.wav"),
    E : new Audio("audio/guitar e.wav"),
    F : new Audio("audio/guitar f.wav"),
    G : new Audio("audio/guitar g.wav"),
    H : new Audio("audio/guitar h.wav"),
    I : new Audio("audio/guitar i.wav")
}

let txt="";
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
function emc()
{
    txt = document.getElementById("d1").value.toUpperCase()
    
    // for (const char of txt)
    // {
    //     char in mus ? mus[char].play() : char;
    // }
    for (var i = 0; i < txt.length; i++)
    {
        console.log(txt[i]);
        mus[txt[i]].play();
        //setTimeout(() => { console.log("Waiting!"); }, 5000);
        sleep(5000);
    }
}
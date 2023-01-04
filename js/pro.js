let button = document.getElementById("button")
//const enc = ["𝄞", "𝄟", "𝄠", "𝄡", "𝄢", "𝄣" ,"𝄤","𝄋","♮","♯","♫","♭","𝆗","𝄥","𝆹𝅥𝅮","𝆺𝅥𝅮","𝆹𝅥𝅯","𝆺𝅥𝅯","♩","♪","𝄦","𝅗𝅥","𝅘𝅥","𝅘𝅥𝅮","𝅘𝅥𝅯","𝅘𝅥𝅰" ];
const encil = {
  "A": "𝄞", B: "𝄟",C: "𝄠",D: "𝄡",E: "𝄢",F: "𝄣",G: "𝄤",H: "𝄋",I: "♮",J: "♯",K: "♫",L: "♭",M: "𝆗",N: "𝄥",O: "𝆹𝅥𝅮",P: "𝆺𝅥𝅮",Q: "𝆹𝅥𝅯",R: "𝆺𝅥𝅯",S: "♩",T: "𝄦",U: "𝅗𝅥", V: "𝆓",  /*&#119187*/ W: "𝅘𝅥", X: "𝅘𝅥𝅮"
  , Y: "𝅘𝅥𝅯", Z: "𝅘𝅥𝅰"," ": " " //" ":"𝄇"  //&#119047;	\x1d107
}


let txt="";
function enc()
{
txt = document.getElementById("enctext").value.toUpperCase()
console.log(txt);
let s="";

for (const char of txt){
   s += char in encil ? encil[char] : char;
}
var encryptedtext;
sessionStorage.setItem("encryptedtext", s);
console.log(s);
window.location.href = "showenctext.html";
//document.getElementById("dectext").innerHTML = s;
/*console.log(typeof(s))
console.log(s.length)
console.log(s.charAt(5))
console.log+encil.A);*/
return s;
}

const decil = {

    "𝄞":"A","𝄟":"B","𝄠":"C","𝄡":"D","𝄢":"E","𝄣":"F","𝄤":"G","𝄋":"H","♮":"I","♯":"J","♫":"K","♭":"L","𝆗":"M","𝄥":"N","𝆹𝅥𝅮":"O","𝆺𝅥𝅮":"P","𝆹𝅥𝅯":"Q","𝆺𝅥𝅯":"R","♩":"S","𝄦":"T","𝅗𝅥":"U","𝆓":"V","𝅘𝅥":"W",
    "𝅘𝅥𝅮":"X","𝅘𝅥𝅯":"Y","𝅘𝅥𝅰":"Z"," ":" " //"𝄇":" "  

   //&#119047;	\x1d107
 }

let tex="";
function dec()
{
tex = document.getElementById("dectext").value
console.log(tex);
let d="";

for (const char of tex){
   d += char in decil ? decil[char] : char;
}
var decryptedtext;
sessionStorage.setItem("decryptedtext", d);
//document.getElementById("t3").innerHTML = d;
console.log(d);
window.location.href = "showdectext.html";
/*console.log(typeof(d))
console.log(d.length)
console.log(d.charAt(5))
console.log+encil.A);*/

return d;
}


/*
//let text = "";
for (let i = 0;i < txt.length;i++)
{
    if(txt.charAt(i) == "A")
    {
        s=s+encil.A + " " ;
    }
    if(txt.charAt(i) == 'B')
    {
       s=s+encil.B + " " ;
    }
    if(txt.charAt(i) =='C')
    {
       s=s+encil.C + " " ;
    }
    if(txt.charAt(i) =='D')
    {
       s=s+encil.D + " ";
    }
    if(txt.charAt(i) =='E')
    {
       s=s+encil.E + " " ;
    }
    if(txt.charAt(i) =='F')
    {
       s=s+encil.F + " " ;
    }
    if(txt.charAt(i) =='G')
    {
       s=s+encil.G + " " ;
    }
    if(txt.charAt(i) =='H')
    {
       s=s+encil.H + " " ;
    }
    if(txt.charAt(i) =='I')
    {
       s=s+encil.I + " " ;
    }
    if(txt.charAt(i) =='J')
    {
       s=s+encil.J + " " ;
    }
    if(txt.charAt(i) =='K')
    {
       s=s+encil.K + " " ;
    }
    if(txt.charAt(i) =='L')
    {
       s=s+encil.L + " " ;
    }
    if(txt.charAt(i) =='M')
    {
       s=s+encil.M + " " ;
    }
    if(txt.charAt(i) =='N')
    {
       s=s+encil.N + " " ;
    }
    if(txt.charAt(i) =='O')
    {
       s=s+encil.O + " " ;
    }
    if(txt.charAt(i) =='P')
    {
       s=s+encil.P + " " ;
    }
    if(txt.charAt(i) =='Q')
    {
       s=s+encil.Q + " " ;
    }
    if(txt.charAt(i) =='R')
    {
       s=s+encil.R + " " ;
    }
    if(txt.charAt(i) =='S')
    {
       s=s+encil.S + " " ;
    }
    if(txt.charAt(i) =='T')
    {
       s=s+encil.T + " " ;
    }
    if(txt.charAt(i) =='U')
    {
       s=s+encil.U + " " ;
    }
    if(txt.charAt(i) =='V')
    { 
       s=s+encil.V + " " ;
    }
    if(txt.charAt(i) =='W')
    {
       s=s+encil.W + " " ;
    }
    if(txt.charAt(i) =='X')
    {
       s=s+encil.X + " " ;
    }
    if(txt.charAt(i) =='Y')
    {
       s=s+encil.Y + " " ;
    }
    if(txt.charAt(i) =='Z')
    {
       s=s+encil.Z + " " ;
    }
    if(txt.charAt(i) ==' ')
    {
      s=s+encil.an + " " ;
   }
   
 



let t="";

for(let i=0;i < s.length;i++)
{
   t=s("i");
}

console.log(t)





const decil = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
decil[0] = "A" // "𝄞"; //A
decil[1] = "B" //"𝄟"; //B,
decil[2] = "C" // "𝄠"; //C,
decil[3] =  "D" // "𝄡";  //D,
decil[4] =  "E" //"𝄢";  //E,
decil[5] =  "F"   //"𝄣";  //F,
decil[6] =  "G"   //"𝄤";  //"G",
decil[7] =  "H"    //"𝄋";  //H,
decil[8] =  "I"    //"♮";  //I,
decil[9] =  "J"    //"♯";  //J,
decil[10] = "K"    //"♫";  //K,
decil[11] = "L"    //"♭";  //L,
decil[12] = "M"    //"𝆗";  //M,
decil[13] = "N"    //"𝄥";  //N,
decil[14] = "O"    //"𝆹𝅥𝅮"; //O,
decil[15] = "P"    //"𝆺𝅥𝅮";  //P,
decil[16] = "Q"  //"𝆹𝅥𝅯";  //Q,
decil[17] = "R"    //"𝆺𝅥𝅯";  //R,
decil[18] = "S"  //"♩";  //S,
decil[19] = "T"    //"𝄦"; //T,
decil[20] = "U"  //"𝅗𝅥";  //U,
decil[21] = "V"   //"𝆓"; //V,
decil[22] = "W"   //"𝅘𝅥";  //W,
decil[23] = "X"  //"𝅘𝅥𝅮";  //X,
decil[24] = "Y"  //"𝅘𝅥𝅯";  //Y,
decil[25] = "Z"  //"𝅘𝅥𝅰";  //Z,
decil[26] = " "  //"𝄇"; //dn // " "
//document.getElementById("demo").innerHTML = decil;




let d = "";
function dec()
{
//let text = "";
for (let i = 0;i < tex.length;i++)
{
    if(tex.charAt(i) == "𝄞")
    {
        d=d+decil[0]+ "" ;
    }
    if(tex.charAt(i) == "𝄟")
    {
       d=d+decil[1] + "" ;
    }
    if(tex.charAt(i) == "𝄠")
    {
       d=d+decil[2] + "" ;
    }
    if(tex.charAt(i) == "𝄡")
    {
       d=d+decil[3] + "";
    }
    if(tex.charAt(i) == "𝄢")
    {
       d=d+decil[4] + "" ;
    }
    if(tex.charAt(i) == "𝄣")
    {
       d=d+decil[5] + "" ;
    }
    if(tex.charAt(i) == "𝄤")
    {
       d=d+decil[6] + "" ;
    }
    if(tex.charAt(i) == "𝄋")
    {
       d=d+decil[7] + "" ;
    }
    if(tex.charAt(i) == "♮")
    {
       d=d+decil[8] + "" ;
    }
    if(tex.charAt(i) == "♯")
    {
       d=d+decil[9] + "" ;
    }
    if(tex.charAt(i) == "♫")
    {
       d=d+decil[10] + "" ;
    }
    if(tex.charAt(i) == "♭")
    {
       d=d+decil[11] + "" ;
    }
    if(tex.charAt(i) == "𝆗")
    {
       d=d+decil[12] + "" ;
    }
    if(tex.charAt(i) == "𝄥")
    {
       d=d+decil[13] + "" ;
    }
    if(tex.charAt(i) == "𝆹𝅥𝅮")
    {
       d=d+decil[14] + "" ;
    }
    if(tex.charAt(i) == "𝆺𝅥𝅮")
    {
       d=d+decil[15] + "" ;
    }
    if(tex.charAt(i) ==  "𝆹𝅥𝅯")
    {
       d=d+decil[16] + "" ;
    }
    if(tex.charAt(i) == "𝆺𝅥𝅯")
    {
       d=d+decil[17] + "" ;
    }
    if(tex.charAt(i) == "♩")
    {
       d=d+decil[18] + "" ;
    }
    if(tex.charAt(i) == "𝄦")
    {
       d=d+decil[19] + "" ;
    }
    if(tex.charAt(i) == "𝅗𝅥")
    {
       d=d+decil[20] + "" ;
    }
    if(tex.charAt(i) == "𝆓")
    {
       d=d+decil[21] + "" ;
    }
    if(tex.charAt(i) == "𝅘𝅥")
    {
       d=d+decil[22] + "" ;
    }
    if(tex.charAt(i) == "𝅘𝅥𝅮")
    {
       d=d+decil[23] + "" ;
    }
    if(tex.charAt(i) == "𝅘𝅥𝅯")
    {
       d=d+decil[24] + "" ;
    }
    if(tex.charAt(i) == "𝅘𝅥𝅰")
    {
       d=d+decil[25] + "" ;
    }
    if(tex.charAt(i) == "𝄇")
    {
      d=d+decil[26] + "" ;
   }
 }
 document.getElementById("t3").innerHTML = d;
 console.log(d);
 console.log(decil[6]);
 console.log(tex.charAt(4))
}


function enc(){
  let text = "";
  for (let i = 0; i < enci.length; i++) {
    text += enci[i] + "" ;
  }
  document.getElementById("t2").innerHTML = text;
  console.log(text);
  console.log+encil.A);
  }


/*function val(e) {
  var someText = e.value;
  console.log(someText )

  if (someText == "text") {  
       document.getElementById("msg").innerHTML="new text"; 
  }
}

let button = document.getElementById("button");
console.log(button);

button.onclick = function(){
let x = document.getElementById("ide").value;
console.log(x);
}

let matt = "";

matt = document.getElementById("t1").innerHTML;
document.getElementById("t2").innerHTML = matt;
text = document.getElementById("t2").innerHTML;

matt = document.getElementById("t1").innerHTML;



console.log(matt);




function enc(){
let s;
let text="";
text = txt;
for(let i=0;i<=txt.length)
if(text[0] == enci[0])
{
s=s+enci[1];
document.getElementById("t2").innerHTML = s;
console.log(s)
}
else{
  console.log("boy")
}
}*/

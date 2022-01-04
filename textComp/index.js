text = `
1. Yes-ter-day___ All my  trou-bles seemed so far a-way
    F             Em7      A7                 Dm       Dm7
   Now it looks as though they're here to stay
 Bb        C7                      F
   Oh  I   be-lieve  in  Yes - ter - day
   C   Dm7     G7        Bb     F

2. Sud-den-ly___ I'm not half the man I used to be
    F         Em7         A7             Dm     Dm7
   There's a sha-dow hang-ing ov-er me
 Bb          C7               F
   Oh  Yes - ter - day came sud-den-ly
   C   Dm7         G7       Bb   F


Chorus: Why  she  had  to  go___ I  don't know she would-n't say
        Em7  A7   Dm   C   Bb    Dm        Gm       C7        F
        I   said  some-thing  wrong___ Now I long for yes-ter-day
        Em   A7    Dm    C     Bb      Dm     Gm      C7       F 

   Oh  I  be-lieve in Yes - ter - day
 C  Dm7      G7     Bb     F

`
document.addEventListener('click', function (e) {
    var target = e.target
    text = target.textContent || target.innerText;
    target.nextSibling.classList.toggle("hidden");
    // debugger
    console.log(text)
})
textArray = text.split('\n').map(f => f.trim())
textArray = textArray.filter(noNull)
function noNull(item) {
    return item != ''
}
firstThree = textArray.map(
    k => k.split(' ').slice(0, 3).join(' ')
)
// window.addEventListener('load', e => {
// con=document.querySelector('.container')
// con.innerHTML="load event"
// })
//add event listenr to top sentences
rn = (x) => Math.floor(Math.random() * x)

// al = (e) => {
//     // debugger
//     clue = e.target.innerHTML
//     fullSen = textArray.filter(p => p.indexOf(clue) != -1)
//     // console.log(clue)
//     spot = textArray.indexOf(clue)
//     textArray[spot + 1]
//     ans.innerHTML = textArray[spot + 1]
//     // console.log(e.target.innerHTML)
// }

// ${i % 2 === 0 ? "<br>" : "<div class='btn'"}
// ${i % 2 === 0 ? "<br>" : "<hr>"}

con = document.querySelector('.row')
conH = textArray.map((k, i) => `<div ${i % 2 != 0 ? "style='color:white' class='hidden'" : ""}
<div  class='pd-2 gx-4 border border-primary sentThree'>

${k} <br>  </div>`).join("")
con.innerHTML = conH

// m = Array.from(document.querySelectorAll('.sentThree'))
// m.forEach(x => x.addEventListener('click', al))
// change answer
// btn = document.querySelector('.btn')
ans = document.querySelector('.answer')
// btn.addEventListener('click', al)
var dictionary = {};

textArray.forEach(function (item, index) {
    if (index % 2 === 0) {
        dictionary[item] = textArray[index + 1];
    }
});

for (const key in dictionary) {
    console.log(`Dictionary:  ${key}: ${dictionary[key]}`);
}

// text = `The Lord is my shepherd; I shall not want.
//  He maketh me to lie down in green pastures: he leadeth me beside the still waters.
//  He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.
//  Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.
//  Thou preparest a table before me in the presence of mine enemies: thou anointest  my head with oil; my cup runneth over.
//  Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.`
song = `
Yes-ter-day___ All my  trou-bles seemed so far a-way
    F             Em7      A7                 Dm       Dm7
   Now it looks as though they're here to stay
 Bb        C7                      F
   Oh  I   be-lieve  in  Yes - ter - day
   C   Dm7     G7        Bb     F

Sud-den-ly___ I'm not half the man I used to be
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
song1 = `Childhood living   is easy to do
Bm          G      Bm           G
The things you wanted      I bought them for you
Am               C       D   G                  D    C
Graceless lady     you know who I am
Bm          G      Bm               G
You know I can't let you     slide through my hands
Am           C         D       G                D       C
Wild Horses     couldn't drag me away
 Am     C      D  G         F       C
Wild wild horses     couldn't drag me away
 Am          C      D  G         F     C
I watched you suffer   a dull aching pain
Bm              G      Bm              G
Now you decided     to show me the same
Am          C     D  G               D     C
No sweeping exits    or offstage lines
Bm               G      Bm            G
Could make me feel bitter     or treat you unkind
Am                 C      D     G          D     C
Wild Horses     couldn't drag me away
Am     C      D  G         F       C
Wild wild horses     couldn't drag me away
Am          C      D  G         F      C
I know I've dreamed you   a sin and a lie
Bm            G           Bm                 G
I have my freedom      but I don't have much time
Am          C       D  G                       D     C
Faith has been broken   tears must be cried
Bm               G      Bm              G
Let's do some living     after we die
Am             C      D  G            D     C
Wild horses     couldn't drag me away
Am     C      D  G         F      C
Wild wild horses     we'll ride them some day
Am          C      D  G      F             C
Wild horses     couldn't drag me away
Am     C      D  G         F      C
Wild wild horses     we'll ride them some day
Am          C      D  G      F             C
`
myBox = document.querySelector('.row')
myBox.addEventListener('click', function (e) {
    var target = e.target
    textE = target.textContent || target.innerText;
    target.nextSibling.classList.toggle("hidden");
    // debugger
    console.log(textE)
})
document.querySelector('#reload').addEventListener('click', () => document.location.reload())
document.querySelector("#wild").addEventListener('click', () => load(1))
document.querySelector("#yesterday").addEventListener('click', () => load(0))
songNumber = 1
function load(songNumber) {
    alltext = []
    alltext.push(song)
    alltext.push(song1)
    text = alltext[songNumber]

    textArray = text.split('\n').map(f => f.trim())
    textArray = textArray.filter(noNull)
    function noNull(item) {
        return item != ''
    }
    firstThree = textArray.map(
        k => k.split(' ').slice(0, 3).join(' ')
    )
    rn = (x) => Math.floor(Math.random() * x)


    con = document.querySelector('.row')
    conH = textArray.map((k, i) => `<div ${i % 2 != 0 ? "style='color:white' class='hidden'" : ""}
<div  class='pd-2 gx-4 border border-primary sentThree'>

${k} <br>  </div>`).join("")
    con.innerHTML = conH

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

}
// text = `The Lord is my shepherd; I shall not want.
//  He maketh me to lie down in green pastures: he leadeth me beside the still waters.
//  He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.
//  Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.
//  Thou preparest a table before me in the presence of mine enemies: thou anointest  my head with oil; my cup runneth over.
//  Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.`
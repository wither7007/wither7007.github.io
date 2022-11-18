console.log("start")
addBtn = document.getElementById("add")
addBtn.addEventListener("click", () => createNewNote())
console.log("event added")

function populateStorage() {
    localStorage.setItem('bgcolor', 'red');
    localStorage.setItem('font', 'Helvetica');
    localStorage.setItem('image', 'myCat.png');
}
// localStorage.setItem('notes', JSON.stringify(notes))
// addBtn = document.getElementById("add")
// addBtn.addEventListener("click", () => createNewNote())
function createNewNote() {

console.log("event from added")
    text="hi from text"
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `<h2> Note </h2>
    <div class="top">This is top</div>
    <textarea rows="10" cols="40" class="${text ? "hidden" : ""}"></textarea>
 
    `
    document.body.appendChild(note)
}

// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     event.preventDefault();
//     if (keyName === 'Control') {
//         // do not alert when only Control key is pressed.
//         return;
//     }

//     if (event.ctrlKey) {
//         // Even though event.key is not 'Control' (e.g., 'a' is pressed),
//         // event.ctrlKey may be true if Ctrl key is pressed at the same time.
//         // if (keyName == "a") {
//             switch(keyName){
//                 case "f":
//                     alert("pressed f")
//                     break

//             }
//         if (keyName == "x") {
//             // alert(`Combination of ctrlKey + ${keyName}`);
//             location.reload()

//         }
//         if (keyName == "a") {

//             // alert(`Combination of ctrlKey + ${keyName}`);
//             createNewNote()
//         }
//     }

// }, false);






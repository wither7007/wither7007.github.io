const firebaseConfig = {
    apiKey: "AIzaSyCS2-mEPWsIL4X0Mu-Xt0pJTDfXnleqRTQ",
    authDomain: "streetcon.firebaseapp.com",
    projectId: "streetcon",
    databaseURL: "https://streetcon-default-rtdb.firebaseio.com/",
    storageBucket: "streetcon.appspot.com",
    messagingSenderId: "89052554955",
    appId: "1:89052554955:web:53c03a85fc3d15e0efdd4e",
    measurementId: "G-YT1DZBYVSS"
};
// firebase.intializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages')

console.log("loaded script")
document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    // e.preventDefault()
    // alert("this was submitted")
    myComment = document.getElementById("comment")
    // alert(myComment.value)
    console.log(myComment.value)
    saveMessage(myComment.value)
}
function saveMessage(mess) {
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: mess
    })
}
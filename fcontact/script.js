//Listen for form submit
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrpkihxkYJJTCvQjntsbrm2rNg4eY1zRs",
    authDomain: "contactfor-3bb82.firebaseapp.com",
    projectId: "contactfor-3bb82",
    storageBucket: "contactfor-3bb82.appspot.com",
    messagingSenderId: "963416544160",
    appId: "1:963416544160:web:464b6e23329479c7ea0ac5",
    measurementId: "G-BFYV6XWW76"
};
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig)
document.getElementById('contactForm').addEventListener('submit', submitForm)
function submitForm(e) {
    e.preventDefault()
    console.log(123)
    var commet = returnId('commet')
    console.log(commet)
}
function returnId(id) {
    return document.getElementById(id).value
}
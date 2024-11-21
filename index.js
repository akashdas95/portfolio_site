const firebaseConfig = {
    apiKey: "AIzaSyDw_4dX1Sco4iJU5DxTINJZvZKkTs4kRJs",
    authDomain: "portfolio-site-contact-f-9191a.firebaseapp.com",
    databaseURL: "https://portfolio-site-contact-f-9191a-default-rtdb.firebaseio.com",
    projectId: "portfolio-site-contact-f-9191a",
    storageBucket: "portfolio-site-contact-f-9191a.appspot.com",
    messagingSenderId: "957959410541",
    appId: "1:957959410541:web:343d2cc5db1a7378e70064",
    measurementId: "G-KQ8H3JTPZ2"
};

firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref("messages");


const submitForm = (e) =>{
    e.preventDefault();
 
    let name = getInputValue("name");
    let email = getInputValue("email");
    let textarea = getInputValue("textarea");
    let date = Date.now();

    saveMessage(name,email,textarea,date);
    if(saveMessage){
      document.querySelector(".alert").style.display = "block";
    }

    
    setTimeout(()=>{
      document.querySelector(".alert").style.display = "none";  
    },5000);

 }
 
 

document.getElementById("contactForm").addEventListener('submit',submitForm);

const getInputValue = (id) =>(document.getElementById(id).value);


const saveMessage = (name,email,textarea,date) =>{
   let newMessageRef = messagesRef.push();
   newMessageRef.set({
    name:name,
    email:email,
    message:textarea, 
    date: date
   });
}




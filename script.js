
const firebaseConfig = {
    apiKey: "AIzaSyBSYNyjgsiDQC7-Xm9OGVF_LkMrlU5q5ac",
    authDomain: "formulario-test-6c34f.firebaseapp.com",
    projectId: "formulario-test-6c34f",
    storageBucket: "formulario-test-6c34f.appspot.com",
    messagingSenderId: "314028602042",
    appId: "1:314028602042:web:972a77e4ec136ab6480883",
    measurementId: "G-4XZTSW418G"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();





const formulario = document.getElementById("formulario")
let nombre = document.getElementById("name")
let nombreError = document.getElementById("nameError")
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")
let password = document.getElementById("password")
let passwordError = document.getElementById("passwordError")







formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    let nombreForm = nombre.value
    let emailForm = email.value
    let passwordForm = password.value


    if (nombreForm.length < 3) {
        nombreError.textContent = "Debes ingresar tu nombre"
        nombreError.classList.add("error-message")
        console.log("error")
    } else {
        nombreError.textContent = ""
        nombreError.classList.remove("error-message")
        console.log("bien")
    }


    var validarEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!validarEmail.test(emailForm)) {
        emailError.textContent = "Debes ingresar un email valido"
        emailError.classList.add("error-message")
        console.log("error")
    } else {
        emailError.textContent = ""
        emailError.classList.remove("error-message")
        console.log("bien")
    }


    // let validarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;

    if (passwordForm.length < 8) {
        passwordError.textContent = "La contraseña debe ser mayor a 8 caracteres"
        passwordError.classList.add("error-message")
        console.log("error")
    } else {
        passwordError.textContent = ""
        passwordError.classList.remove("error-message")
        console.log("bien")
    }


    if(nombreError.textContent === "" && emailError.textContent === "" && passwordError.textContent === ""){
        
        
        db.collection("users").add({
            nombre: nombreForm,
            email: emailForm,
            password: passwordForm
        })
        .then((docRef) => {
            alert("Datos guardados con exito",docRef.id)
            document.getElementById("formulario").reset()
            
        })
        .catch((error) => {
            alert(error)
          
        });
        
        
    }else{
        return
    }


   




})
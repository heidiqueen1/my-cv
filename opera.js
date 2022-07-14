
  const firebaseConfig = {
    apiKey: "AIzaSyDZkfN79CP0OFwJE6GTFiHPEm2X700dz64",
    authDomain: "curriculo-verdadero.firebaseapp.com",
    projectId: "curriculo-verdadero",
    storageBucket: "curriculo-verdadero.appspot.com",
    messagingSenderId: "251035617088",
    appId: "1:251035617088:web:29d7bc14298ac4cf5d5ca5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
let db = firebase.firestore();


  const saveUser = (user) =>{
   
    db.collection("Comentarios").add({
        user,
       
    })
    .then((docRef) => {
        // MSJOK();
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        // MSJERROR();
        console.error("Error adding document: ", error);
    });


  }

//   const MSJOK = () => {
//     Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//       )
//   }

//   const MSJERROR = () => {
//     Swal.fire(
//         'Oops!',
//         '¡Los datos no fueron guardados correctamente!',
//         'error'
//       )
//   }

  $("#btnEnviar").on("click", ()=>{
    let email = $("#email").val();
    let comentario = $("#comentario").val();

    const user = {
        email,
        comentario
    }

    saveUser(user);
  })



 




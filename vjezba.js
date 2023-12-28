let str = "Moje ime je Damir";

let str1 = str.substring(0 , 8);

let str1Big = str1.toLocaleUpperCase();

console.log(str1Big);

let str2 = str.substring(9);

str = str.replaceAll(" " , "_");
console.error(str);

if ( str.includes("Damir") ) {
   console.log("Ime postoji");
} else {
   console.warn("nista");
}


//email verefication (radi)

let button1 = document.getElementById("button1");
let inputField = document.getElementById("inputField");
let textbox = document.getElementById("textbox");

inputField.addEventListener('input' , function() {
   if (inputField.value === "") {
      textbox.innerHTML = "Please type something";
      textbox.className = "textbox";
   } else {
      let email = inputField.value;

      let emailLength1 = email.split("@");

      if ( emailLength1.length !== 2) {
         textbox.innerHTML = "Not a valid email";
         textbox.className ="textboxError";
   } else {
      if ( emailLength1[0] === "") {
      textbox.innerHTML = "Email not valid please type the user correctly";
      textbox.className = "textboxError";
   } else {
      let rightParts = emailLength1[1].split(".");
      if (rightParts.length !==2) {
         textbox.innerHTML = "wrong domain input please try again";
         textbox.className = "textboxError";
      }else {
         if ( rightParts[0] === "") {
            textbox.innerHTML = "please type a domain";
            textbox.className = "textboxError";
         } else if ( rightParts[1] === "") {
            textbox.innerHTML = "please type domain afer dot";
            textbox.className = "textboxError";
         } else {
            textbox.innerHTML = "email verified";
            textbox.className = "textbox";
         }
      }
   }
}

   }
});

//

//red u kojem kada prvi udje prvi i izadje

let button2 = document.getElementById("button2");
let inputField2 = document.getElementById("inputField2");
let button3 = document.getElementById("button3");



let redNiz = [];

   button2.addEventListener('click' , function() {
      redNiz.push(inputField2.value);
      console.log(redNiz);
   }
   );
   
   button3.addEventListener('click' , function() {
      redNiz.shift();
      console.log(redNiz);
   }
   );

//

//regex email
/*
let textbox2 = document.getElementById("textbox2");

let email = /^[a-zA-z0-9]{3,20}+@[a-zA-z]{0,9}\.[a-z]{2,3}$/;

inputField2.addEventListener('input' , function() {
   if ( inputField2.value !== 0 ) {
      if ( inputField2.value === email ) {
         textbox2.innerHTML = "email verified";
      } else {
         textbox2.innerHTML = "wrong email";
         textbox2.className = "textboxError2";
      }
   }
}
);
*/
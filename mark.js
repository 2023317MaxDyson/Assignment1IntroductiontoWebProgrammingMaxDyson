
/** 
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program. 
 * @author: Max Dyson. 
 *   @LinkstoPage MarkToGradewebpage.html
*/


/* Mark to Grade Converter Page */

let mark = document.getElementById("mark");

let markisaNumber = mark;

document.getElementById("convert").addEventListener('click',function(){
MarkToGrade(markisaNumber);
})

 function MarkToGrade(markisaNumber){

let invalidMessage = document.getElementById("invalid");

 // Should display no invalid messages 

invalidMessage.innerHTML = ""; 

/*  A Mark must be number only, nonnegative, and less than 101 */

  try{
  
    // If the value of markisaNumber is not a number (isNaN)

 if (isNaN(markisaNumber.value)){
  throw "Must be a number";
}

// If the value of markisaNumber is greater than 100

// parseInt converts a string into a number 

if(parseInt(markisaNumber.value) > 100){

   throw "The number must be less than 101";

}

// If the value of markisaNumber has no value

 if(markisaNumber.value == ""){
  throw "Empty";
}

// If the value of markisaNumber is less than 0

if (parseInt(markisaNumber.value) < 0 ){
  throw "The number must be non-negative ";
}
}

catch(error){

   // Should display an invalid message from the try
invalidMessage.innerHTML = error;
invalidMessage.style.color = "red";
}

let Grade = document.getElementById("grade");

Grade.innerHTML = "";

// If the value of markisaNumber is less than or equal to 100 and greater than 90 =  Grade A

if(parseInt(markisaNumber.value) <= 100 && parseInt(markisaNumber.value) > 90 ){
Grade.innerHTML = "Grade A";
Grade.style.color = "green";
}


// If the value of markisaNumber is less than or equal to 90 and greater than 80 =  Grade B

if(parseInt(markisaNumber.value) <= 90 && parseInt(markisaNumber.value) > 80) {
  Grade.innerHTML = "Grade B";
  Grade.style.color = "green";
}

// If the value of markisaNumber is less than or equal to 80 and greater than 70 =  Grade C

if(parseInt(markisaNumber.value) <= 80 && parseInt(markisaNumber.value) > 70 ){
  Grade.innerHTML = "Grade C";
  Grade.style.color = "green";
}

// If the value of markisaNumber is less than or equal to 70 nd greater than 50 =  Grade D

if(parseInt(markisaNumber.value) <= 70 && parseInt(markisaNumber.value) > 50 ){
   Grade.innerHTML = "Grade D";
  Grade.style.color = "green";
}

// If the value of markisaNumber is less than or equal to 50  and greater than -1  =  Grade F

if(parseInt(markisaNumber.value) <= 50 && parseInt(markisaNumber.value) > -1 ){
 Grade.innerHTML = "Grade F";
  Grade.style.color = "green";
}
 }
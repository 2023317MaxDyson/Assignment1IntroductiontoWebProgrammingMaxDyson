/** 
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program. 
 * @author: Max Dyson. 
 * @LinkstoPage index.html
*/


/* Personal Profile Page  */


// Gets the current date

const currentDate = new Date();

// Gets the year 2024

let currentYear = currentDate.getFullYear();  

// getMonth() gets the month by 0 to 11;      

let currentMonth = currentDate.getMonth();   //  1 = February 


// getUTCDate starts with 1 then you have to add a number to get the correct date      

let currentDay = currentDate.getUTCDate() + 28 // 29; 

const tag = `${currentYear}  ${currentMonth}  ${ currentDay }`

document.getElementById("currentDate").innerHTML = tag;



// Display the image name after 10 seconds 

let ImageName = document.getElementById("imageName");

// ImageName is invisible

ImageName.style.display = "none";

DisplaynameofImage(ImageName);


function DisplaynameofImage (ImageName){

    setTimeout(()=> {
    
        // If the ImageName is invisible then change ImaneName to be visible in 10 seconds

        if(ImageName.style.display == "none"){
            ImageName.style.display =  "block";
            
        }
        
        else {
            ImageName.style.display =  "none";
        }
    }, 10000)
    

}





 
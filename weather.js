/** 
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program. 
 * @author: Max Dyson. 
 * @LinkstoPage WeatherPage.html
*/

$(document).ready(function(){
    $("#convertDegree").click(function(){

    /* Degree in Fahrenheit */
    let F = $("#degree").val();

    /* Convert  degree Fahrenheit to degree Celsius
    F - 32 /1.8 =   C */
    let C = (F - 32) / 1.8;

       // Displays a HTML Template of the answer in Celsius
    $("#displayDegree").append(`<p> Celsius: ${C} °C </p>`);

  /* Convert  Celsius to Kelvin 
   Kelvin = Celsius + 273.15K */
  let K =  C + 273.15; 

    // Displays a HTML Template of the answer in Kelvin
  $("#displayDegree").append(`<p> Kelvin: ${K}K </p>`);
    })
    })  
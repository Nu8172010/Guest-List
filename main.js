function submit()
{
    var display_guest_array=[];
    for (var j = 1; j <=4; j++)
 {
var name_of_guest=document.getElementById("name_of_guest_"+j).value;
console.log(name_of_guest);
name_of_guest_array.push(name_of_guest);
 }
 console.log(name_of_guest);
 var legnth_of_name_of_guest_array= name_of_guest_array.length;
 console.log(legnth_of_name_of_guest_array);
 for (var k = 0; k < legnth_of_name_of_guests_array; k++)
 {
    display_guest_array.push("<h4>NAME -"+ name_of_guests_array[k] + "</h4>");
    console.log(name_of_guest_array);
   
 }
 console.log(display_guest_array);
 document.getElementByID("display_name_with_commas").innerHTML = display_guest_array;

 var remove_commas = display_guest_array.join("");
 console.log (remove_commas);
 document.getElementById("display_name_without_commas").innerHTML=remove_commas;

 document.getElementById("submit_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
 
 
  

 }
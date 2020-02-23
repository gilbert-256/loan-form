function formValidation(){
    var idate=document.registration.date;
    var uname=document.registration.name;
    var vsex=document.registration.msex;
    var hsex=document.registration.fsex;
    var unin=document.registration.nin;
    var uemail=document.registration.email;
    var uadress=document.registration.address;
    var ucontac=document.registration.contact;
    var ucontact=document.registration.dob;

}
if(idate_Validation(date,current_date)){
if(allLetter(name)){
if(allsex_Validation(msex,fsex)){
if(userid_Validation(nin,7,12)){
if(ValidateEmail(email)){
if(validteAddress(address)){
if(validateContact(contact)){
if(validateDobb(dob)){
}
}
}
}
}
}
}
return false;
}

function allLetter(name)
{ 
var letters = /^[A-Za-z]+$/;
//Using if and else statement to check whether the value matches with alphabet characters
if(name.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
name.focus();
return false;
}
}

function allsex_Validation(msex,fsex)
{
x=0;
// Using if statements to check for the conditons

if(msex.checked) 
{
x++;
} if(fsex.checked)
{
x++; 
}
if(x==0)
{
    // Returning true and false after checking for the condition
alert('Select Male/Female');
msex.focus();
return false;
}
}
function userid_Validation(nin,mx,my)
{
var nin_len = nin.value.length;
// Using if statement to test binary expression below
if (nin_len == 0 || nin_len >= my || nin_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
nin.focus();
// Return statement for false or true
return false;
}
return true;
}
function ValidateEmail(email)
{
    // Using if statement to test whether the mailformat is true
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(email.value.match(mailformat))
// Returning true true or false
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
// Defining a method validsex with 1 parameter
}

function validteAddress(){

}
function alphanumeric(address)
{ 
var letters = /^[0-9a-zA-Z]+$/;
// Using if and else statement to check weather the value matches with letters

if(address.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
address.focus();
// Returning false if the statement is not true
return false;
}
}
function validateContact(){
    if (phone.value == "")						 
	{ 
		window.alert("Please enter your telephone number."); 
		phone.focus(); 
		return false; 
	} 

}
function validateDobb(){
    if (dob.value == "")						 
	{ 
		window.alert("Please enter your date of birth."); 
		dob.focus(); 
		return false; 
    } 
    else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}


}
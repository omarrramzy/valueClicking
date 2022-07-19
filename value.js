
// we call the elements by the id name
var input = document.getElementById("value");
var paragraph = document.getElementById("data");

// we give spome data for variables to call them in the function
let myName = "Someone";
let identity = 123456789;
let mobilenum = 966;
let address = "ABC Street";
let pobox = 1234;

// we give the input function to allow showing data by pressing enter key
input.addEventListener("keypress", (e) => {
    var inputValue = input.value;
    //we use the and comparison to be able for showing the value when you press enter 
    if(e.key === 'Enter' && inputValue == "name"){
        paragraph.innerHTML = (`${myName}`);
    } else if(e.key === 'Enter' && inputValue == "identity"){
        paragraph.innerHTML = `${identity}`;
    } else if(e.key === 'Enter' && inputValue == "mobilenum"){
        paragraph.innerHTML = `${mobilenum}`;
    } else if(e.key === 'Enter' && inputValue == "address"){
        paragraph.innerHTML = `${address}`;
    } else if(e.key === 'Enter' && inputValue == "pobox"){
        paragraph.innerHTML = `${pobox}`;
    // if the value entered not of the same in if..else if the value will be empty
    } else {
        paragraph.innerHTML = "";
    }
})
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chakra.jpg') {
        myImage.setAttribute('src', 'images/meditation.jpg');
    } else {
        myImage.setAttribute('src', 'images/chakra.jpg');    
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'You best Meditation' + storeName;
}

myButton.onclick = function() {
    setUserName();
}
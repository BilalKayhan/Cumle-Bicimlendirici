const inputElement = document.getElementById('content');
const buttonElement = document.getElementById('submitBtn');
const outputElement = document.getElementById('output');


buttonElement.addEventListener('click', function() {
    const input = inputElement.value;

    if (input.trim() === "") {
    alert("Lütfen bir cümle girin!");
    return;
    }

    const upperCase = input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

    const newParagraph = document.createElement('p');
    newParagraph.textContent = upperCase;
    outputElement.appendChild(newParagraph);

    inputElement.value = ""; 
});
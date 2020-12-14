let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);


function insertSquare() {

}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
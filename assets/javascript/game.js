var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["gemstone", "dwarf", "elves", "dragon", "castle", "ogre", "sword", "goblin", "palace", "horse", "knight", "court", "prince", "princess", "king", "queen", "wizard"];
var alphabetGuessed = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//Creating the array of images
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './assets/images/1.png';

console.log(imgArray[0]);

//document.getElementById("pic").src = imgArray[0].src;
document.getElementById("instruct").innerHTML = "Guess the word before Rayva gets too tired!";

imgArray[1] = new Image();
imgArray[1].src = 'assets/images/2.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/images/3.png';

imgArray[3] = new Image();
imgArray[3].src = 'assets/images/4.png';

imgArray[4] = new Image();
imgArray[4].src = 'assets/images/5.png';

imgArray[5] = new Image();
imgArray[5].src = 'assets/images/6.png';

imgArray[6] = new Image();
imgArray[6].src = 'assets/images/7.png';

imgArray[7] = new Image();
imgArray[7].src = 'assets/images/8.png';

imgArray[8] = new Image();
imgArray[8].src = 'assets/images/9.png';

imgArray[9] = new Image();
imgArray[9].src = 'assets/images/10.png';



//var to say you've won or lost
var res = "";


//Keeps track of correctly guessed letters.
var letterCount = 0;

//Keeps track of wrong guesses
var wrongGuess = 0;
var wrongCount = 0;

//Variable to count the number of wins
var winsCount = 0;

//Randomly chosen word
var randomWord = words[Math.floor(Math.random() * words.length)];

//Array to show initially on screen with all of the necessary "_"'s
var ansArr = [];

//Array to check if letter spaces in the randomly chosen word have been chosen
var isTrue = [];

for (var i = 0; i < randomWord.length; i++) {
    ansArr[i] = "_";
    isTrue[i] = false;
}


//Sets array shown on screen for the spaces in the randomly chosen word
for (var j = 0; j < randomWord.length; j++) {
    document.getElementById("wordString").innerHTML += ansArr[j] + " ";
}

//Boolean variable to test if we've already incremented wrongCount in this
//particular guess
var increment = true;

document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();

    //var wrngGuessCount = 0;

    var imgCount = 0;

    document.getElementById("wordString").innerHTML = "";

    increment = true;

    for (var i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
            increment = false;
            isTrue[i] = true;
            letterCount++;

            for (var j = 0; j < alphabet.length; j++) {
                if (letter === alphabet[j]) {
                    alphabetGuessed[j] = true;
                }
            }
        } else if (i == randomWord.length - 1 && increment) {

            document.getElementById("pic").src = imgArray[wrongCount].src;


            for (var c = 0; c < alphabetGuessed.length; c++) {
                if (!alphabetGuessed[c] && letter === alphabet[c]) {
                    wrongCount++;
                }
            }

            increment = false;
            for (var j = 0; j < alphabet.length; j++) {
                if (letter === alphabet[j]) {
                    alphabetGuessed[j] = true;
                }
            }
        }


    }


    for (var a = 0; a < ansArr.length; a++) {

        if (isTrue[a]) {
            document.getElementById("wordString").innerHTML += randomWord.charAt(a) + " ";
        } else if (isTrue[a] !== true) {

            document.getElementById("wordString").innerHTML += "_" + " ";
        }

        //Prints string to screen with number of wrong guesses
        document.getElementById("wrongG").innerHTML = "Wrong Guesses: " + wrongCount;

        //Prints the letters guessed to the screen
        document.getElementById("lettersG").innerHTML = "Letters Guessed: ";


        document.getElementById("winCount").innerHTML = "Number Of Wins: ";

        for (var i = 0; i < alphabetGuessed.length; i++) {
            if (alphabetGuessed[i]) {
                document.getElementById("lettersG").innerHTML += alphabet[i] + ", ";
            }
        }

    }


    if (wrongCount > 9) {
        res = "You Lose!";
        document.getElementById("result").innerHTML = res;









        res = "";
        document.getElementById("result").innerHTML = res;
        document.getElementById("wordString").innerHTML = "";
        wrongCount = 0;
        letterCount = 0;
        document.getElementById("lettersG").innerHTML = "";
        for (var i = 0; i < alphabet.length; i++) {

            alphabetGuessed[i] = false;
        }


        randomWord = words[Math.floor(Math.random() * words.length)];


        ansArr = [];
        isTrue = [];
        for (var i = 0; i < randomWord.length; i++) {
            ansArr[i] = "_";
            isTrue[i] = false;
        }

        for (var j = 0; j < randomWord.length; j++) {
            document.getElementById("wordString").innerHTML += ansArr[j] + " ";
        }








    } else if (letterCount == randomWord.length) {
        res = "You Win!";
        document.getElementById("result").innerHTML = res;
        winsCount++;
        document.getElementById("winCount").innerHTML += winsCount;
        res = "";
        document.getElementById("result").innerHTML = res;
        document.getElementById("wordString").innerHTML = "";
        wrongCount = 0;
        letterCount = 0;
        document.getElementById("lettersG").innerHTML = "";
        for (var i = 0; i < alphabet.length; i++) {

            alphabetGuessed[i] = false;
        }


        randomWord = words[Math.floor(Math.random() * words.length)];


        ansArr = [];
        isTrue = [];
        for (var i = 0; i < randomWord.length; i++) {
            ansArr[i] = "_";
            isTrue[i] = false;
        }

        for (var j = 0; j < randomWord.length; j++) {
            document.getElementById("wordString").innerHTML += ansArr[j] + " ";
        }

    }


    return ansArr;

};
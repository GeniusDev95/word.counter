var userText = prompt("Type a sentence to count words in it");
var userInput = userText.trim();
var result = 1;
for(i=0; i<userInput.length; i++){
    if(userInput.charAt(i) === " " ){
        result++;
    }
}
alert(`The total number of words in a given sentence are ${result}`)
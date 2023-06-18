//Check if the given string is panagram
//A panagram is a string which has all the alphabets in it
//The quick brown fox jumps over the lazy dog.
function isPanagram(inputStr){
    let alphabetArr="abcdefghijklmnopqrstuvwxyz".split("");
    inputStr= inputStr.toLowerCase();
    for(i=0;i<alphabetArr.length;i++){
        if(inputStr.indexOf(alphabetArr[i])<0){
            return false;
        }
    }
    return true;
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("The quick brown fox jumps over the dog"));


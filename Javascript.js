//1. Check if the given string is panagram
//A panagram is a string which has all the alphabets in it
//The quick brown fox jumps over the lazy dog.
//approach 1
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
//approach 2
function isPanagram(inputStr){
   if(typeof inputStr !== "string"){
       return "Input must be string"
   }
   let result = new Set()
   for(let ch of inputStr.toUpperCase()){
       if(/[A-Z]/.test(ch)){
           result.add(ch)
       }
   }
   return result.size === 26 ? true :false
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("The quick brown fox jumps over the dog"));

//2. reverse a string
// approach 1
function getReversedString(str){
    return str.split("").reverse().join("")
}
// approach 2
function getReversedString(str){
    let newString=""
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i]
    }
    return newString
}
// approach 3
function getReversedString(str){
    if(str === ""){
        return ""
    }
    return getReversedString(str.substr(1)) + str.charAt(1)
}

console.log(getReversedString("This is a string"))

//3. largest in an array
//approach 1
function getLargestNumber(arr){
    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            largest=arr[i]
        }
    }
    return largest
}

//approach 2
function getLargestNumber(arr){
    let largest= arr.reduce((a,b)=>{
      return a>b ? a : b
    })
    return largest
}

//approach 3
function getLargestNumber(arr){
    return Math.max.apply(0,arr)
}

//approach 4
function getLargestNumber(arr){
    let largest= arr.sort((a,b)=>{
      return a-b
    }).pop()
    return largest
}

console.log(getLargestNumber([1,25,5,3,67,34]))



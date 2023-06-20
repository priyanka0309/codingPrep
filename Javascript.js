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

//3.Check if given strings are anagram
//approach 1
function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    str1= str1.split("").sort().join("")
    str2= str2.split("").sort().join("")
    if(str1 === str2){
        return true
    }else{
        return false
    }
}
//approach 2
function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    for(var i of str1){
        if(str2.indexOf(i)<0){
            return false
        }
    }
    return true
}

console.log(isAnagram("mood silent","doom listen"))

//4.Check if given string is palindrome
//approach 1
function isPalindrome(str){
    let revString=str.split("").reverse().join("")
    if(str === revString){
        return true
    }else{
        return false
    }
}
//approach 2
function isPalindrome(str){
    for(var i=0; i<(str.length)/2;i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("madam"))

//5. Derive given output
var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];

 
 let sortedArr=InputArr.sort((a,b)=>a.p-b.p)
 
     let outputArr=[]
     for(var i=sortedArr[0].p;i<=sortedArr[sortedArr.length -1].p;i++){
     if(sortedArr.find(e=>e.p === i)){
         outputArr.push({p : i})
     }else{
         outputArr.push({})
     }
     }
 console.log(outputArr)

// var outputArr = [{p:2},{},{p:4},{},{p:6},{},{},{p:9}]


// 6. Get max count of conjugative 1's in given below array

var nums = [1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0];

let maxDigits=0
let currentMaxDigits=0
for(let i=0;i<nums.length;i++){
    if(nums[i]===1){
        currentMaxDigits+=1
    }else{
        currentMaxDigits=0
    }
    if(maxDigits<currentMaxDigits){
         maxDigits= currentMaxDigits
    }
}
console.log(maxDigits)

//7. Get the count of persons group by country in give array of persons

var persons = [{ "name": 'xyz',"address": {
"line_1": "street 1",
"line_2": "",
"city": "test city",
"state": "TX",
"country": "US"
}
},
{ "name": 'abcd',"address": {
"line_1": "street 1",
"line_2": "",
"city": "test city",
"state": "TN",
"country": "IN"
}
},
{ "name": 'efg',"address": {
"line_1": "street 1",
"line_2": "",
"city": "test city",
"state": "NY",
"country": "US"
}
}]

function getCountByCounter(pplArr){
    let result=pplArr.reduce((output,person)=>{
        let country=person['address'].country
        if(output[country]){
            output[country]+=1
        }else{
              output[country]=1
        }
        return output
    },{})
    console.log(result)
}

getCountByCounter(persons)
//Remove duplicates in an array
let arr=[1,2,3,3,4,1,5]

function removeDuplicates(arr){
    let updatedArr= arr.reduce((updatedArr, currentElement)=>{
        if(!updatedArr.includes(currentElement)){
            updatedArr.push(currentElement)
        }
        return updatedArr;
    },[])
    return updatedArr
}
console.log(removeDuplicates(arr))

//get max number of repeated character
let str="apple"

function getUniqueCharacters(str){
  let charArr=str.split("")
  let charObj=charArr.reduce((acc,curr)=>{
      if(acc[curr]){
          acc[curr]+=1
      }else{
          acc[curr]=1
      }
      return acc
  },{})
  return charObj
}
console.log(getUniqueCharacters(str))




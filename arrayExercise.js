function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var characterPosition = 0; 
           characterPosition < stringToCount.length; 
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  characterCount);
}

function countingCharacters3(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
    return count;
}

function findMaxNum(listOfNums){
    console.log("List of numbers: " + listOfNums);

    var maxNum = null;
    for (var index = 0; index < listOfNums.length; index++){

        console.log("listOfNums[" + index + "]: " + listOfNums[index]);

        if (maxNum < listOfNums[index]) {
            maxNum = listOfNums[index];
            console.log("New max found...maxNum: " + maxNum);
        }
    }
}

function sumOfRange(listOfNums){
    console.log("List of numbers: " + listOfNums);
    
    var sumTotal = null;
    for (var index = 0; index < listOfNums.length; index++){
        sumTotal += listOfNums[index];

        console.log("sumTotal: " + sumTotal)
    }
}
function findMax(listOfNums){
    console.log("List of numbers: " + listOfNums);

    var maxNum = listOfNums[0];
    for (var index = 0; index < listOfNums.length; index++){

        //console.log("listOfNums[" + index + "]: " + listOfNums[index]);

        if (maxNum <= listOfNums[index]) {
            maxNum = listOfNums[index];
            //console.log("New maxNum: " + maxNum);
        }
    }
    return maxNum;
}
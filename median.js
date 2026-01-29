function sortNumbers(numbers){
    for(let count = 0; count < numbers.length; count++){
        for(let counter = count + 1; counter< numbers.length; counter++){
            if(numbers[count] > numbers[counter]){
                let temp = numbers[count];
                numbers[count] = numbers[counter];
                numbers[counter] = temp;
            }
        }
    }

    const median = findMedian(numbers)
    return median;
}



function findMedian(numbers){
    let numberLength = numbers.length;
    let median = 0;
    
    if(numberLength % 2 == 0){
        median += numbers[(numberLength-1)/2];
        median += numbers[numberLength/2 -1]
        const total = median/2;
        return total;
    }
    else {
        median += numbers[(numberLength - 1)/2];
        return median;
       
    }
    
}

let num = [2,5,1,9,8];
console.log(sortNumbers(num));
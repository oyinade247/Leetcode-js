const numbers = [1,1,2,3,3,3,4,4];

console.log(isUnique(numbers));


function isUnique (numbers){
  let countOne =0; let countTwo = 0; let countThree = 0;let countFour = 0;
  const unique = [];

    for(let count = 0; count < numbers.length; count++){
        numbers[count] === 1 ? countOne++ :
        numbers[count] === 2 ? countTwo++ :
        numbers[count] === 3 ? countThree++ :
        numbers[count] === 4 ? countFour++ : 0;
        
    let isDouble = false;

    for(let counter = 0; counter < unique.length; counter++){
        if(numbers[count] === unique[counter]){
            isDouble = true;
        }
    }

    if(!isDouble){
        unique.push(numbers[count]);
    }
}

    const dict = {
        uniqueNumber: unique,
        1 : countOne,
        2 : countTwo,
        3: countThree,
        4 : countFour,
   
}
  return dict;
};




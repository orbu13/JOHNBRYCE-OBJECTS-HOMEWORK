console.log("___Page57(5)___");

let arrayOfNumbersA = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayOfNumbersA);


function changingArray(arrayOfNumbersA){
    let arrayOfNumbersB= [];
    let arrayOfNumbersC = [];
    for(let i = 0; i < arrayOfNumbersA.length; i++){
        if(arrayOfNumbersA[i] % 2 === 0){
            arrayOfNumbersB.push(arrayOfNumbersA[i]);
        }else{
            arrayOfNumbersC.push(arrayOfNumbersA[i]);
        }
    }
    return arrayOfNumbersB.concat(arrayOfNumbersC)
}
console.log(changingArray(arrayOfNumbersA));

console.log("___Page57(6)___");


let arrayOfTwenty = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(arrayOfTwenty);

let newArrayOfTwenty = []

function rightToLeft(arrayOfTwenty){

    for(let i = arrayOfTwenty.length - 1; i >=0; i--){
            newArrayOfTwenty.push(arrayOfTwenty[i])
        }
    }

rightToLeft(arrayOfTwenty);
console.log(newArrayOfTwenty);


console.log("___Page57(7)___");


let arrayOfRandom = [1,2,3,55,"orel","moses",23,true,false,"5432",[],[4323],["numbers"]]
let arrayNumbers = []
let arrayString = []
let arrayOthers = []

function countingCreatures (arrayOfRandom){
    for(let i = 0; i < arrayOfRandom.length; i++){
        if(typeof arrayOfRandom[i] === 'number'){
            arrayNumbers.push(arrayOfRandom[i])
        } else if (typeof arrayOfRandom[i] === 'string'){
            arrayString.push(arrayOfRandom[i])
        }else{
            arrayOthers.push(arrayOfRandom[i])
        }
    }
    console.log("Number of digits:", arrayNumbers, arrayNumbers.length);
    console.log("Number of letters:", arrayString, arrayString.length);
    console.log("Number of others:", arrayOthers, arrayOthers.length);
}
countingCreatures (arrayOfRandom)
